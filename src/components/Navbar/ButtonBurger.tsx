import clsx from "clsx";

interface ButtonBurgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function ButtonBurger({
  isOpen,
  onClick,
  className = "",
}: ButtonBurgerProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center items-center w-20 h-20 ${className}`}
    >
      <span
        className={clsx(
          "bg-white block h-0.5 w-6 rounded-sm",
          "transition-all duration-300 ease-out",
          {
            "rotate-45 translate-y-1": isOpen,
            "-translate-y-0.5": !isOpen,
          }
        )}
      ></span>
      <span
        className={clsx(
          "bg-white block h-0.5 w-6 rounded-sm my-0.5",
          "transition-all duration-300 ease-out",
          {
            "opacity-0": isOpen,
            "opacity-100": !isOpen,
          }
        )}
      ></span>
      <span
        className={clsx(
          "bg-white block h-0.5 w-6 rounded-sm",
          "transition-all duration-300 ease-out",
          {
            "-rotate-45 -translate-y-1": isOpen,
            "translate-y-0.5": !isOpen,
          }
        )}
      ></span>
    </button>
  );
}
