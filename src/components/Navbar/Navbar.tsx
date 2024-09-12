"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logopng.png"
import { DropdownMenu } from "./DropdownMenu";
import { Menu } from "./Menu";

const links = [
  { target: "https://www.thesunnyawards.fun", label: "About" },
  { target: "/", label: "Metrics" },
];

export function Navbar() {
  return (
    <nav className="bg-transparent px-6 lg:px-24 h-[64px] flex justify-between items-center pt-14 ">
      <div className="z-50 flex items-center justify-between w-full font-bold font-inter">
        <Link href="https://www.thesunnyawards.fun">
          <Image src={logo} alt="Logo" className="w-48 auto w- h-18" />
        </Link>
        <DropdownMenu links={links} />
      </div>
      <Menu links={links} />
    </nav>
  );
}
