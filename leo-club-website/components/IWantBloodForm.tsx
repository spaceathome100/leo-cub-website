"use client";

import { useState } from "react";
import { db } from "@/lib/firebase"; // adjust path if needed
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

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await addDoc(collection(db, "blood_requests"), {
        ...form,
        age: Number(form.age),
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

      setStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-leoBlue">
        I Need Blood
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="patientName"
          placeholder="Patient Name"
          value={form.patientName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        <input
          name="age"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={3}
          placeholder="Age"
          value={form.age}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.replace(/[^0-9]/g, "");
          }}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        <select
          name="bloodGroup"
          value={form.bloodGroup}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
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
          className="w-full p-2 border rounded-xl"
        />

        <input
          name="contactNumber"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]{10}"
          maxLength={10}
          placeholder="Contact Number"
          value={form.contactNumber}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.replace(/[^0-9]/g, "");
          }}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        <input
          name="location"
          placeholder="City / Location"
          value={form.location}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        <input
          name="hospitalName"
          placeholder="Hospital Name"
          value={form.hospitalName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        <input
          name="hospitalContact"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]{10}"
          maxLength={10}
          placeholder="Hospital Contact Number"
          value={form.hospitalContact}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.replace(/[^0-9]/g, "");
          }}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-leoBlue hover:bg-leoAccent text-white py-2 rounded-xl font-semibold transition"
        >
          {status === "submitting" ? "Submitting..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center">
            Thank you! Your request has been submitted.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
