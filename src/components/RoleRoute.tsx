// RoleRoute.tsx
"use client";

import React from "react";
import useRoleRoute from "@/hooks/useRoleRoute";

interface RoleRouteProps {
  children: React.ReactNode;
  role: string;
}

const RoleRoute: React.FC<RoleRouteProps> = ({ children, role }) => {
  const { isLoaded, role: userRole } = useRoleRoute();

  if (isLoaded && userRole === role) {
    return <>{children}</>;
  }
  if (!isLoaded) {
    return <div className="p-4">Loading Data...</div>;
  }

  return (
    <div className="font-bold p-4">
      Access Denied: Insufficient permissions.
    </div>
  );
};

export default RoleRoute;
