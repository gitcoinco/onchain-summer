import clsx from "clsx";

interface BadgeProps {
  value: string;
  className?: string;
}

export function Badge({ value, className = "" }: BadgeProps) {
  return (
    <div
      className={clsx(
        "h-[29px] sm:min-w-[100px] lg:min-w-[120px]",
        "bg-white rounded-full border-2",
        "flex items-center justify-center",
        "font-normal text-sm/[21px] text-center",
        className,
        {
          "border-green-300": value.toLowerCase() === "approved",
          "border-orange-300": value.toLowerCase() === "rejected",
          "border-gray-300": value.toLowerCase() === "pending",
        }
      )}
    >
      {typeof value === "string"
        ? value.charAt(0).toUpperCase() + value.slice(1)
        : value}
    </div>
  );
}
