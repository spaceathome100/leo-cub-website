"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function AdminProtected({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser || currentUser.email !== "hariatprojects@gmail.com"&& currentUser.email !== "leomichaelsharan@gmail.com") {
        router.push("/admin"); // redirect to login
      } else {
        setUser(currentUser);
      }
      setChecking(false);
    });

    return () => unsubscribe();
  }, []);

  if (checking) return <p className="text-center py-20">Checking authentication...</p>;

  return <>{user && children}</>;
}
