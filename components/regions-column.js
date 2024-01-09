import StateItem from "./state-item"

const RegionsColumn = ({states,startIndex,endIndex,child,regionHovered,handleRegion})=>{
    return (
    <div className="h-full w-[25%] ">
   {child}
    {Object.keys(states)
      .slice(startIndex, endIndex)
      .map((state) => (
        <StateItem
          key={state}
          label={state}
          regionHovered={regionHovered}
          handleRegion={handleRegion}
        />
      ))}
  </div>
  )
}

export default RegionsColumn