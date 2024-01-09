import clsx from "clsx";
const StateItem = ({ label, className, regionHovered, handleRegion }) => {
  const isActive =
    regionHovered?.toLowerCase().trim() === label.toLowerCase().trim();
  return (
    <p
      className={clsx(
        "my-[3px] px-2.5 text-[14px] leading-6 cursor-pointer truncate",
        isActive && "bg-[#ff9800] text-white font-medium",
        className
      )}
      onMouseEnter={() => handleRegion && handleRegion(label)}
      onMouseLeave={() =>handleRegion && handleRegion(null)}
    >
      {label}
    </p>
  );
};

export default StateItem;
