import clsx from "clsx";

interface BadgeProps {
  value: any;
}

export function Badge({ value }: BadgeProps) {
  return (
    <div
      className={clsx(
        "w-[164px] h-[29px] sm:min-w-[100px] lg:min-w-[120px]",
        "bg-white rounded-full border",
        "flex items-center justify-center",
        "font-normal text-sm/[21px] text-center",
        {
          "border-green-100": value === "approved",
          "border-orange-100": value === "rejected",
          "border-gray-100": value === "pending",
        }
      )}
    >
      {typeof value === "string"
        ? value.charAt(0).toUpperCase() + value.slice(1)
        : value}
    </div>
  );
}
