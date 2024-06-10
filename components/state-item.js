import clsx from "clsx";
const StateItem = ({
  label,
  className,
  regionHovered,
  handleRegion,
  isAllActive,
}) => {
  const isActive =
    regionHovered?.toLowerCase().trim() === label.toLowerCase().trim();
  return (
    <p
      className={clsx(
        "my-[3px] first:mt-0 px-2.5 text-[14px] leading-6 cursor-pointer truncate",
        isActive && "bg-[#ff9800] text-white font-medium",
        isAllActive && "hover:bg-[#ff9800] hover:text-white",
        className
      )}
      onMouseEnter={() => handleRegion && handleRegion(label)}
      onMouseLeave={() => handleRegion && handleRegion(null)}
    >
      {label}
    </p>
  );
};

export default StateItem;
