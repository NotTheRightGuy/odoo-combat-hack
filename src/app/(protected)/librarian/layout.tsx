import RoleRoute from "@/components/RoleRoute";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <RoleRoute role="librarian">{children}</RoleRoute>;
}

export default layout;
