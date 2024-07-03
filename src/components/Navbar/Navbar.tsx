import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { DropdownMenu } from "./DropdownMenu";
import { Menu } from "./Menu";

const links = [
  { target: "/applications", label: "applications" },
  { target: "/rewards", label: "rewards" },
  { target: "/eligibility", label: "faq" },
];

export function Navbar() {
  return (
    <nav className="bg-transparent px-4 md:px-20 h-[64px] flex justify-between items-center">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-7 w-auto" />
        </Link>
        <DropdownMenu links={links} />
      </div>
      <Menu links={links} />
    </nav>
  );
}
