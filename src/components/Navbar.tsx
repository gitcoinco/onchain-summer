import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const links = [
  { target: "/applications", label: "applications" },
  { target: "/rewards", label: "rewards" },
  { target: "/eligibility", label: "faq" },
];

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-transparent px-20 h-[64px] text-black flex justify-between items-center">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-7 w-auto" />
        </Link>
      </div>
      <div className={"md:flex items-center block"}>
        {links.map(({ target, label }) => (
          <NavbarLink key={target} target={target} currentPath={pathname}>
            {label}
          </NavbarLink>
        ))}
      </div>
    </nav>
  );
}

function NavbarLink({
  target,
  currentPath,
  children,
}: {
  target: string;
  currentPath: string;
  children: string;
}) {
  return (
    <Link
      to={target}
      className={`block mt-4 md:mt-0 md:inline-block mr-4 font-normal text-lg/5 ${
        currentPath === target ? "underline" : ""
      }`}
    >
      {children}
    </Link>
  );
}
