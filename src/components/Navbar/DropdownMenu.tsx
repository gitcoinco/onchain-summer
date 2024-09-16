import { useState } from "react";
import { ButtonBurger } from "./ButtonBurger";
import { NavbarLink } from "./NavbarLink";
import clsx from "clsx";

interface DropdownMenuProps {
  links: Array<{ target: string; label: string }>;
}

// Needs to have a listener to close the menu when the window get's resized to md

export function DropdownMenu({ links }: DropdownMenuProps) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ButtonBurger
        isOpen={isOpen}
        onClick={toggleMenu}
        className="lg:hidden"
      />
      {isOpen && (
        <div
          className={clsx(
            "lg:hidden z-50",
            "absolute top-20 right-0",
            "bg-transparent shadow-lg rounded-lg p-4",
            "flex flex-col gap-2 items-center"
          )}
        >
          {links.map(({ target, label }) => (
            <NavbarLink
              key={target}
              target={target}
              onClick={() => setIsOpen(false)}
              currentPath={"/"}
            >
              {label}
            </NavbarLink>
          ))}
        </div>
      )}
    </>
  );
}
