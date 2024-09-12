import { Link } from "react-router-dom";
// import logo from "@/assets/thesunnys.svg";
// import logo from "@/assets/award.png";
import logo from "@/assets/logopng.png"
import { DropdownMenu } from "./DropdownMenu";
import { Menu } from "./Menu";

const links = [
  { target: "https://www.thesunnyawards.fun", label: "About" },
  { target: "/leaderboard", label: "Metrics" },
];

export function Navbar() {
  return (
    <nav className="bg-transparent px-6 lg:px-24 h-[64px] flex justify-between items-center pt-14">
      <div className="flex items-center justify-between w-full font-bold font-inter">
        <Link to="https://www.thesunnyawards.fun">
          <img src={logo} alt="Logo" className="w-48 auto w- h-18" />
        </Link>
        <DropdownMenu links={links} />
      </div>
      <Menu links={links} />
    </nav>
  );
}
