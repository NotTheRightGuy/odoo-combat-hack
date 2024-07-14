// useRoleRoute.tsx
"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRoleRoute = () => {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/auth/sign-in");
    }
  }, [isLoaded, userId, router]);

  // Return role if authenticated
  const role = userId
    ? (user?.unsafeMetadata.role as string | undefined)
    : undefined;

  return { isLoaded, userId, role };
};

export default useRoleRoute;
