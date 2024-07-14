import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useProtectedRoute = () => {
  const { isLoaded, userId, sessionId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/auth/sign-in");
    }
  }, [isLoaded, userId, router]);

  return { isLoaded, userId, sessionId };
};

export default useProtectedRoute;
