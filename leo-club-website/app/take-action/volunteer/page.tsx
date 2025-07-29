"use client";
import { useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the path if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";
import LeoTalk from "@/components/LeoTalk";

export default function VolunteersPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        contact: "",
        email: "",
        bloodGroup: "",
        address: "",
        occupation: "",
        leadership: "",
        reason: "",
        reference: "",
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleContactChange = (e: any) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 10); // digits only, max 10
        setForm((prev) => ({ ...prev, contact: value }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "volunteer_signups"), {
                ...form,
                submittedAt: Timestamp.now(),
            });

            setSubmitted(true);
            setForm({
                firstName: "",
                lastName: "",
                dob: "",
                gender: "",
                contact: "",
                email: "",
                bloodGroup: "",
                address: "",
                occupation: "",
                leadership: "",
                reason: "",
                reference: "",
            });
        } catch (err) {
            alert("Something went wrong. Please try again.");
            console.error(err);
        }

        setLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto px-4 pt-28 pb-16">
            <LeoTalk />
            <h1 className="text-3xl font-bold text-leoBlue mb-6 text-center">Be a member now!</h1>

            {submitted ? (
                <div className="text-green-600 font-semibold text-center">
                    🎉 Thank you for signing up! We'll be in touch soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Basic Inputs */}
                    {[
                        { label: "First Name", name: "firstName" },
                        { label: "Last Name", name: "lastName" },
                        {
                            label: "Date of Birth",
                            name: "dob",
                            type: "date",
                            max: new Date().toISOString().split("T")[0],
                        },
                        { label: "Gender", name: "gender" },
                        { label: "Blood Group", name: "bloodGroup" },
                        { label: "Mailing Address", name: "address" },
                        { label: "Occupation", name: "occupation" },
                    ].map((field) => (
                        <div key={field.name}>
                            <label className="block font-medium mb-1">{field.label}</label>
                            <input
                                type={field.type || "text"}
                                name={field.name}
                                value={form[field.name as keyof typeof form]}
                                onChange={handleChange}
                                required
                                max={field.max}
                                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-leoAccent"
                            />
                        </div>
                    ))}

                    {/* Contact Number */}
                    <div>
                        <label className="block font-medium mb-1">Contact Number</label>
                        <input
                            type="tel"
                            name="contact"
                            value={form.contact}
                            onChange={handleContactChange}
                            required
                            pattern="\d{10}"
                            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-leoAccent"
                            placeholder="10-digit number"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium mb-1">Email ID</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-leoAccent"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Leadership Role */}
                    <div>
                        <label className="block font-medium mb-1">
                            Can you handle leadership roles and lead teams or events?
                        </label>
                        <select
                            name="leadership"
                            value={form.leadership}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-leoAccent"
                        >
                            <option value="">Select</option>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                        </select>
                    </div>

                    {/* Reason */}
                    <div>
                        <label className="block font-medium mb-1">
                            Why do you want to be part of our organization?
                        </label>
                        <textarea
                            name="reason"
                            value={form.reason}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-leoAccent"
                            rows={4}
                        />
                    </div>

                    {/* Reference */}
                    <div>
                        <label className="block font-medium mb-1">Reference Name (if applicable)</label>
                        <input
                            name="reference"
                            value={form.reference}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-leoAccent"
                            placeholder="Optional"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-leoBlue text-white px-6 py-2 rounded-md hover:bg-leoAccent transition"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            )}
        </div>
    );
}
