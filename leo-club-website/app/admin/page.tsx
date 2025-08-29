"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  // Google Login
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      // ✅ Only allow your email
      if (result.user.email !== "hariatprojects@gmail.com" && result.user.email !== "leomichaelsharan@gmail.com") {
        alert("Unauthorized email. Access denied.");
        await signOut(auth);
        return;
      }

      setUser(result.user);
      console.log("Logged in:", result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Logged out");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-[400px]">
        {!user ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Leo Club Admin Login</h1>
            <button
              onClick={handleLogin}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            >
              Login with Google
            </button>
          </>
        ) : (
          <>
            {/* ✅ Admin Dashboard */}
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-gray-600 mb-6">
              Welcome, {user.displayName}! 🎉
            </p>

            {/* Example Admin Actions */}
            <div className="space-y-4">
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                📌 Manage Blood Requests
              </button>

              <button
                onClick={() => router.push("/admin/stories/new")}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
              >
                📝 Add New Impact Story
              </button>

              <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
                👥 Manage Team Members
              </button>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="mt-6 w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
