"use client";
import { useState } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddUpcomingEvent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null); // ✅ Preview URL
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file)); // ✅ Create preview
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select an image for the event");
      return;
    }

    setLoading(true);

    try {
      const storageRef = ref(storage, `upcoming_events/${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "upcoming_events"), {
        title,
        date,
        tag,
        description,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Event added successfully!");
      setTitle("");
      setDate("");
      setTag("");
      setDescription("");
      setImageFile(null);
      setPreview(null); // ✅ Reset preview
    } catch (err) {
      console.error(err);
      alert("Failed to add event.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Upcoming Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Tag (e.g., Volunteer, Awareness Drive)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded h-32 resize-none"
          required
        ></textarea>

        {/* ✅ Image upload with preview */}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            required
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-full max-h-52 object-cover rounded"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Uploading..." : "Add Event"}
        </button>
      </form>
    </div>
  );
}
