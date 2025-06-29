import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import nodemailer from "nodemailer";

// Initialize Firebase Admin
initializeApp();
const db = getFirestore();

// Configure Nodemailer using Firebase environment config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

// Cloud Function: Trigger on new blood request
export const notifyDonors = functions.firestore
  .document("blood_requests/{requestId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();
    console.log("Blood request received:", data);

    if (!data) {
      console.error("No request data found.");
      return;
    }

    const {
      bloodGroup,
      patientName,
      location,
      hospitalName,
      email,
    } = data;

    // Get matching donors
    const donorsSnapshot = await db
      .collection("donors")
      .where("bloodGroup", "==", bloodGroup)
      .get();

    const donorEmails: string[] = [];
    donorsSnapshot.forEach((doc) => {
      const donor = doc.data();
      if (donor.email) {
        donorEmails.push(donor.email);
      }
    });

    if (donorEmails.length === 0) {
      console.log("❌ No matching donors found.");
      return;
    }

    // Compose and send email
    const mailOptions = {
      from: `"Leo Club" <${functions.config().gmail.email}>`,
      to: donorEmails,
      subject: `Urgent Blood Request - ${bloodGroup}`,
      html: `
        <h2>Urgent Blood Request</h2>
        <p><strong>Patient Name:</strong> ${patientName}</p>
        <p><strong>Blood Group:</strong> ${bloodGroup}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Hospital:</strong> ${hospitalName}</p>
        <p>Please respond if you're able to donate.</p>
        <p><strong>Requested By:</strong> ${email}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("✅ Emails sent to:", donorEmails);
    } catch (err) {
      console.error("❌ Error sending emails:", err);
    }
  });
