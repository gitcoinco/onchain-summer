import { NavbarLink } from "./NavbarLink";

interface MenuProps {
  links: Array<{ target: string; label: string }>;
}
export function Menu({ links }: MenuProps) {
  // const { pathname } = useLocation();

  return (
    <div className='z-50 items-center justify-center hidden gap-6 lg:flex whitespace-nowrap'>
      {links.map(({ target, label }) => (
        <NavbarLink key={target} target={target} currentPath={"/"}>
          {label}
        </NavbarLink>
      ))}
    </div>
  );
}
