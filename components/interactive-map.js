"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import mapData from "../utils/mapdata.geojson";
const prescurtariJudete = {
  Alba: "AB",
  Arad: "AR",
  Arges: "AG",
  Bacau: "BC",
  Bihor: "BH",
  "Bistrita-Nasaud": "BN",
  Botosani: "BT",
  Braila: "BR",
  Brasov: "BV",
  Bucuresti: "B",
  Buzau: "BZ",
  Calarasi: "CL",
  "Caras-Severin": "CS",
  Cluj: "CJ",
  Constanta: "CT",
  Covasna: "CV",
  Dambovita: "DB",
  Dolj: "DJ",
  Galati: "GL",
  Giurgiu: "GR",
  Gorj: "GJ",
  Harghita: "HR",
  Hunedoara: "HD",
  Ialomita: "IL",
  Iasi: "IS",
  Ilfov: "IF",
  Maramures: "MM",
  Mehedinti: "MH",
  Mures: "MS",
  Neamt: "NT",
  Olt: "OT",
  Prahova: "PH",
  Salaj: "SJ",
  "Satu Mare": "SM",
  Sibiu: "SB",
  Suceava: "SV",
  Teleorman: "TR",
  Timis: "TM",
  Tulcea: "TL",
  Valcea: "VL",
  Vaslui: "VS",
  Vrancea: "VN",
};

const InteractiveMap = () => {
  return (
    <div className="absolute  z-50 -bottom-[305px] m-auto bg-white max-w-5xl w-full h-[390px] rounded-[9px] drop-shadow-xl ">
      <div className="flex w-full h-full">
        <div className="w-[54%]">
          <ComposableMap
            style={{ width: "100%", height: "100%" }}
            projection="geoMercator"
            projectionConfig={{
              scale: 4700,
              center: [25, 46],
            }}
            stroke="white"
            stroke-width={1.2}
            fill="#009688"
          >
            <Geographies geography={mapData?.features}>
              {({ geographies }) => {
                return (
                  <>
                    {geographies.map((geo) => {
                      if (geo.id === "5944") return null;
                      return <Geography key={geo?.rsmKey} geography={geo} />;
                    })}
                    {geographies.map((geo) => {
                      const provinceCenter = geoCentroid(geo);
                      const clujPlacement = [23.614967497008553,46.77209999584197]
                      const neamtPlacement =[26.3036193984180,46.9317225663707]
                      return (
                        <Marker key={geo.rsmKey} coordinates={
                            geo?.properties?.name === "Cluj" ? clujPlacement : geo.properties?.name === "Neamt" ? neamtPlacement : provinceCenter}>
                          <text 
                          style={{
                            fill:"white",
                            strokeWidth:0
                          }}
                          textAnchor='middle'
                          className="text-[25px] font-medium">{prescurtariJudete[geo.properties.name]}</text>
                        </Marker>
                      );
                    })}
                  </>
                );
              }}
            </Geographies>
          </ComposableMap>
        </div>
        <div className="flex-1 relative bg-orange">
          <div className="w-[20px] h-[20px] bg-white rotate-45 absolute -top-[10px] left-[10px] z-[1000]" />
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
