"use client"
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
  } from "react-simple-maps";
  import { geoCentroid } from "d3-geo";

  import mapData from "../utils/mapdata.geojson";

const CountryMap = ({handleActiveState,activeState,regionHovered,states,handleRegion})=>{
return (
    <ComposableMap
    projection="geoMercator"
    projectionConfig={{
      scale: 4700,
      center: [25, 46],
    }}
    stroke="white"
    strokeWidth={1.2}
    fill="#009688"
    className="w-full h-full cursor-pointer"
  >
    <Geographies geography={mapData?.features}>
      {({ geographies }) => {
        return (
          <>
            {geographies.map((geo) => {
              const isActive = activeState === geo?.properties?.name;
              return (
                <Geography
                  key={geo?.rsmKey}
                  onClick={() =>
                    handleActiveState(geo?.properties?.name)
                  }
                  geography={geo}
                  style={{
                    default: { outline: "none" },
                    pressed: { outline: "none", fill: "#ff9800" },
                    hover: {
                      outline: "none",
                      fill:
                        regionHovered === geo?.properties?.name
                          ? "#ff9800"
                          : "",
                    },
                  }}
                  fill={
                    isActive || regionHovered === geo?.properties?.name
                      ? "#ff9800"
                      : ""
                  }
                  onMouseEnter={() =>
                    handleRegion(geo?.properties?.name)
                  }
                  onMouseLeave={() => handleRegion(null)}
                />
              );
            })}
            {geographies.map((geo) => {
              const provinceCenter = geoCentroid(geo);
              const clujPlacement = [
                23.614967497008553, 46.77209999584197,
              ];
              const neamtPlacement = [
                26.303619398418, 46.9317225663707,
              ];
              const smPlacement = [
                22.99445543669566, 47.70127089222578,
              ];
              const mhPlacement = [22.962154414438487,44.456338240923986]
              if (geo.id === "5944") return;
              return (
                <Marker
                  key={geo.rsmKey}
                  coordinates={
                    geo?.properties?.name === "Cluj"
                      ? clujPlacement
                      : geo.properties?.name === "Neamt"
                      ? neamtPlacement
                      : geo.properties?.name === "Satu Mare"
                      ? smPlacement :geo.properties?.name === "Mehedinti" ?mhPlacement
                      : provinceCenter
                  }
                  onMouseEnter={() =>
                    handleRegion(geo?.properties?.name)
                  }
                >
                  <text
                    style={{
                      fill: "white",
                      strokeWidth: 0,
                    }}
                    textAnchor="middle"
                    className="text-[25px] font-medium"
                  >
                    {states[geo.properties.name]}
                  </text>
                </Marker>
              );
            })}
          </>
        );
      }}
    </Geographies>
  </ComposableMap>
)
}

export default CountryMap