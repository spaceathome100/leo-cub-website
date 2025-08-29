"use client";

import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);

  // Google Login
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
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
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-[350px]">
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
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName}</h1>
            <img
              src={user.photoURL}
              alt="Profile"
              className="mx-auto w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-600 mb-6">{user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
