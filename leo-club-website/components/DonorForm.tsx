"use client";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const donationTypes = ["Whole Blood", "Plasma", "Platelets", "Double Red"];
const daysOptions = ["Weekdays", "Weekends", "Anytime"];

export default function DonorForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    dob: "",
    idNumber: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    bloodGroup: "",
    donationType: "",
    lastDonation: "",
    preferredDays: "",
    isAvailable: true,

    // Medical screening
    medication: "",
    donatedRecently: "",
    conditions: [] as string[],
    surgery: "",
    lifestyle: "",
    pregnancy: "",

    // Consent
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // ✅ TypeScript-safe handleChange
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement; // narrow type
      if (name === "conditions") {
        const checked = target.checked;
        const condition = target.value;
        setFormData((prev) => ({
          ...prev,
          conditions: checked
            ? [...prev.conditions, condition]
            : prev.conditions.filter((c) => c !== condition),
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: target.checked }));
      }
    } else {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      setFormData((prev) => ({ ...prev, [name]: target.value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await addDoc(collection(db, "donors"), {
        ...formData,
        age: Number(formData.age),
        createdAt: Timestamp.now(),
      });
      setStatus("success");
      setFormData({
        fullName: "",
        age: "",
        gender: "",
        dob: "",
        idNumber: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        pincode: "",
        bloodGroup: "",
        donationType: "",
        lastDonation: "",
        preferredDays: "",
        isAvailable: true,

        medication: "",
        donatedRecently: "",
        conditions: [],
        surgery: "",
        lifestyle: "",
        pregnancy: "",
        consent: false,
      });
    } catch (error) {
      console.error("Error adding donor:", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-leoBlue">
        Blood Donor Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          />
          <input
            type="tel"
            name="age"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={3}
            placeholder="Age"
            value={formData.age}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = target.value.replace(/[^0-9]/g, "");
            }}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          />
          <input
            type="text"
            name="idNumber"
            placeholder="Aadhaar / ID Proof Number (optional)"
            value={formData.idNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl col-span-2"
          />
          <input
            type="tel"
            name="phone"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Phone Number"
            value={formData.phone}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = target.value.replace(/[^0-9]/g, "");
            }}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl col-span-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          />
          <input
            type="tel"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = target.value.replace(/[^0-9]/g, "");
            }}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          />
        </div>

        {/* Donation Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
          <select
            name="donationType"
            value={formData.donationType}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Donation Type</option>
            {donationTypes.map((dt) => (
              <option key={dt} value={dt}>
                {dt}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="lastDonation"
            value={formData.lastDonation}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
          />
          <select
            name="preferredDays"
            value={formData.preferredDays}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Preferred Days</option>
            {daysOptions.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isAvailable"
            checked={formData.isAvailable}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Available to donate now</span>
        </label>

        {/* Medical Screening */}
        <div className="space-y-4">
          <textarea
            name="medication"
            placeholder="Are you currently on any medication? If yes, specify."
            value={formData.medication}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
          />
          <select
            name="donatedRecently"
            value={formData.donatedRecently}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Donated in the last 3 months?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <div>
            <p className="mb-2 font-semibold">Do you have any of the following conditions?</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {["Diabetes", "Hypertension", "Heart Disease", "Asthma", "Cancer", "Hepatitis", "HIV", "Other"].map(
                (cond) => (
                  <label key={cond} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="conditions"
                      value={cond}
                      checked={formData.conditions.includes(cond)}
                      onChange={handleChange}
                    />
                    {cond}
                  </label>
                )
              )}
            </div>
          </div>

          <select
            name="surgery"
            value={formData.surgery}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Any major surgery/illness in last 6 months?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="lifestyle"
            value={formData.lifestyle}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Do you smoke/consume alcohol regularly?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="pregnancy"
            value={formData.pregnancy}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Are you pregnant/breastfeeding? (for females)</option>
            <option>Yes</option>
            <option>No</option>
            <option>Not Applicable</option>
          </select>
        </div>

        {/* Consent */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="w-5 h-5"
          />
          <span>I confirm the information is true and I voluntarily register as a blood donor.</span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-leoBlue hover:bg-leoAccent text-white py-2 rounded-xl font-semibold transition"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting..." : "Submit"}
        </button>

        {/* Status */}
        {status === "success" && (
          <p className="text-green-600 text-center">
            ✅ Thank you! Your donor registration has been submitted.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
