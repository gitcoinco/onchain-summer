import { Link } from "react-router-dom";
import logo from "@/assets/thesunnys.svg";
import { DropdownMenu } from "./DropdownMenu";
import { Menu } from "./Menu";

const links = [
  // { target: "/applications", label: "applications" },
  // { target: "/rewards", label: "rewards" },
  // { target: "/eligibility", label: "faq" },
  { target: "/about", label: "About" },
  { target: "/participate", label: "How to Participate" },
  { target: "/schedule", label: "Schedule" },
  { target: "/leaderboard", label: "Leaderboard" },
];

export function Navbar() {
  return (
    <nav className="bg-transparent pl-20 pr-4 lg:pr-20 h-[64px] flex justify-between items-center pt-12">
      <div className="flex items-center justify-between w-full font-bold font-inter">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-auto h-20" />
        </Link>
        <DropdownMenu links={links} />
      </div>
      <Menu links={links} />
    </nav>
  );
}
