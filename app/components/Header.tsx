import React from "react";
import { Avatar } from "@nextui-org/react";

function Header() {
  return (
    <div className="flex justify-between ">
      <div></div>
      <div className=" flex items-center gap-x-6">
        <p className=" font-semibold uppercase">Admin</p>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
