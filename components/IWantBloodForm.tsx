"use client";

import { useState } from "react";
import { db } from "../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function IWantBloodForm() {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    bloodGroup: "",
    attenderName: "",
    contactNumber: "",
    email: "",
    location: "",
    hospitalName: "",
    hospitalContact: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<null | boolean>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "blood_requests"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setForm({
        patientName: "",
        age: "",
        bloodGroup: "",
        attenderName: "",
        contactNumber: "",
        email: "",
        location: "",
        hospitalName: "",
        hospitalContact: "",
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-leoBlue">I Need Blood</h2>

      <input
        name="patientName"
        placeholder="Patient Name"
        value={form.patientName}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        name="age"
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <select
        name="bloodGroup"
        value={form.bloodGroup}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      >
        <option value="">Select Blood Group</option>
        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
          <option key={bg} value={bg}>
            {bg}
          </option>
        ))}
      </select>

      <input
        name="attenderName"
        placeholder="Attender Name"
        value={form.attenderName}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        name="contactNumber"
        placeholder="Contact Number"
        value={form.contactNumber}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        name="hospitalName"
        placeholder="Hospital Name"
        value={form.hospitalName}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        name="hospitalContact"
        placeholder="Hospital Contact Number"
        value={form.hospitalContact}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-leoBlue text-white font-bold py-2 px-4 rounded"
      >
        {loading ? "Submitting..." : "Submit Request"}
      </button>

      {submitted === true && (
        <p className="text-green-600 font-medium">
          ✅ Request sent to matching donors!
        </p>
      )}
      {submitted === false && (
        <p className="text-red-600 font-medium">
          ❌ No donors matched or there was an error.
        </p>
      )}
    </form>
  );
}
