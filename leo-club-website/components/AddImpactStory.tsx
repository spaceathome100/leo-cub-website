"use client";
import { useState } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddImpactStory = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [authors, setAuthors] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length + images.length > 4) {
      alert("You can upload a maximum of 4 images.");
      return;
    }
    setImages([...images, ...selectedFiles]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // upload images and get URLs
      const imageUrls = await Promise.all(
        images.map(async (file) => {
          const storageRef = ref(storage, `impact-stories/${file.name}`);
          await uploadBytes(storageRef, file);
          return await getDownloadURL(storageRef);
        })
      );

      // auto-generate slug from title
      const slug = title.toLowerCase().replace(/\s+/g, "-");

      // split description into paragraphs
      const content = description.split("\n").filter((p) => p.trim() !== "");

      await addDoc(collection(db, "impact_stories"), {
        title,
        slug,
        location,
        date,
        authors: authors.split(",").map((a) => a.trim()),
        description,
        images: imageUrls,
        content,
        createdAt: serverTimestamp(),
      });

      alert("Story added successfully!");
      setTitle("");
      setLocation("");
      setDate("");
      setAuthors("");
      setDescription("");
      setImages([]);
    } catch (err) {
      console.error(err);
      alert("Failed to add story.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Impact Story</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
          placeholder="Authors (comma separated)"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Description (paragraph, new line starts a new paragraph)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded h-32 resize-none"
          required
        ></textarea>

        <div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">Maximum 4 images allowed</p>
        </div>

        {images.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-2">
            {images.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Uploading..." : "Add Story"}
        </button>
      </form>
    </div>
  );
};

export default AddImpactStory;
