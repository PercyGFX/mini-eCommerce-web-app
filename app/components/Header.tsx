import React from "react";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between items-center ">
      <Link href="/">
        <div>Mini Ecommerce</div>
      </Link>
      <div className=" flex items-center gap-x-6">
        <p className=" font-semibold uppercase">Admin</p>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
