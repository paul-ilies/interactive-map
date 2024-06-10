import StateItem from "./state-item";

const RegionsColumn = ({ states, child, regionHovered, handleRegion }) => {
  return (
    <div className="w-full columns-4">
      {child}
      {Object.keys(states).map((state) => (
        <StateItem
          key={state}
          label={state}
          regionHovered={regionHovered}
          handleRegion={handleRegion}
        />
      ))}
    </div>
  );
};

export default RegionsColumn;
