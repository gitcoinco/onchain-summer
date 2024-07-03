import { Link } from "react-router-dom";

export function NavbarLink({
  target,
  currentPath,
  onClick = () => {},
  children,
}: {
  target: string;
  currentPath: string;
  onClick?: () => void;
  children: string;
}) {
  return (
    <Link
      to={target}
      onClick={onClick}
      className={`block mt-4 md:mt-0 md:inline-block mr-4 font-normal text-lg/5 ${
        currentPath === target ? "underline" : ""
      }`}
    >
      {children}
    </Link>
  );
}
