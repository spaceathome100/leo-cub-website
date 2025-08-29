"use client";

import AdminProtected from "@/components/AdminProtected";
import AddImpactStory from "@/components/AddImpactStory";

export default function NewStoryPage() {
  return (
    <AdminProtected>
      <AddImpactStory />
    </AdminProtected>
  );
}
