import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <SignIn routing="hash" />
    </main>
  );
}
