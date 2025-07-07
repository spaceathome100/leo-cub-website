"use client";
import { useState } from "react";
import { db } from "@/lib/firebase"; // adjust if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function DonorForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    bloodGroup: "",
    phone: "",
    email: "",
    location: "",
    lastDonation: "",
    isAvailable: true,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
    }));
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
        bloodGroup: "",
        phone: "",
        email: "",
        location: "",
        lastDonation: "",
        isAvailable: true,
      });
    } catch (error) {
      console.error("Error adding donor:", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-leoBlue">Become a Blood Donor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        {/* Age (Digits only) */}
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

        {/* Blood Group */}
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

        {/* Phone (Digits only) */}
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

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="City / Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-xl"
        />

        {/* Last Donation Date (Optional) */}
        <label className="block">
          <span className="text-gray-600">Last Donation Date (optional)</span>
          <input
            type="date"
            name="lastDonation"
            value={formData.lastDonation}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-xl"
          />
        </label>

        {/* Availability */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-leoBlue hover:bg-leoAccent text-white py-2 rounded-xl font-semibold transition"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting..." : "Submit"}
        </button>

        {/* Submission Status */}
        {status === "success" && (
          <p className="text-green-600 text-center">
            Thank you! Your information has been submitted.
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
