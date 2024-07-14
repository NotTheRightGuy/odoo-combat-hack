import RoleRoute from "@/components/RoleRoute";
import React from "react";

function layout({children}:{children:React.ReactNode}) {
  return <RoleRoute role="user">{children}</RoleRoute>;
}

export default layout;
