"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import AddUpcomingEvent from "@/components/AddUpcomingEvent";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [showUpcomingForm, setShowUpcomingForm] = useState(false);
  const router = useRouter();

  // Google Login
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      if (
        result.user.email !== "hariatprojects@gmail.com" &&
        result.user.email !== "leomichaelsharan@gmail.com"
      ) {
        alert("Unauthorized email. Access denied.");
        await signOut(auth);
        return;
      }

      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showUpcomingForm ? "hidden" : "auto";
  }, [showUpcomingForm]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 py-12 px-4">
      {!user ? (
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">Leo Club Admin Login</h1>
          <button
            onClick={handleLogin}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Login with Google
          </button>
        </div>
      ) : (
        <>
          <div className="w-full max-w-3xl flex flex-col items-center space-y-8">
            {/* Admin Dashboard */}
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full text-center">
              <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
              <p className="text-gray-600 mb-6">
                Welcome, {user.displayName}! 🎉
              </p>

              {/* Admin Action Buttons */}
              <div className="space-y-4 mb-6">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                  📌 Manage Blood Requests
                </button>

                <button
                  onClick={() => router.push("/admin/stories/new")}
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                >
                  📝 Add New Impact Story
                </button>

                <button
                  onClick={() => setShowUpcomingForm(true)}
                  className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition"
                >
                  📅 Add Upcoming Event
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
            </div>
          </div>

          {/* Upcoming Event Modal - OUTSIDE the container */}
          {showUpcomingForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl relative">
                <button
                  onClick={() => setShowUpcomingForm(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
                >
                  ✕
                </button>
                <AddUpcomingEvent />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
