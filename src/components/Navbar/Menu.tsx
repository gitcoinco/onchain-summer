import { useLocation } from "react-router-dom";
import { NavbarLink } from "./NavbarLink";

interface MenuProps {
  links: Array<{ target: string; label: string }>;
}
export function Menu({ links }: MenuProps) {
  const { pathname } = useLocation();

  return (
    <div className={"hidden lg:flex items-center w-full md:w-auto"}>
      {links.map(({ target, label }) => (
        <NavbarLink key={target} target={target} currentPath={pathname}>
          {label}
        </NavbarLink>
      ))}
    </div>
  );
}
