"use client";
import { useState, useCallback, lazy, Suspense } from "react";
import { states } from "@/utils/states";
import StateItem from "./state-item";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { ClipLoader } from "react-spinners";
import RegionsColumn from "./regions-column";
import useClickAway from "@/hooks/useClickAway";

const CountryMap = lazy(() => import("./country-map"));

const InteractiveMap = ({ handleCloseMap }) => {
  const [activeState, setActiveState] = useState(null);
  const [regionHovered, setRegionHovered] = useState(null);
  const ref = useClickAway(()=>{
   handleCloseMap()
  })
  const handleActiveState = useCallback((state) => {
    setActiveState(state);
  }, []);

  const handleRegion = useCallback((state) => {
    setRegionHovered(state);
  }, []);

  return (
    <div ref={ref} className="absolute  z-50 -bottom-[305px] m-auto bg-white max-w-5xl w-full h-[390px] rounded-[9px] drop-shadow-xl ">
      <div className="relative flex w-full h-full">
        <Button
          onClick={handleCloseMap}
          className="w-[46px] h-[46px] absolute right-0 top-0 p-0 cursor-pointer z-[50]"
          variant="link"
        >
          <IoCloseOutline className="w-[25px] h-[25px]  text-gray-400" />
        </Button>
        <div className="w-[54%] flex justify-center items-center ">
          <Suspense
            fallback={
              <ClipLoader
                size={50}
                color="#009688"
                speedMultiplier={0.6}
                cssOverride={{ borderWidth: "5px" }}
              />
            }
          >
            <CountryMap
              handleActiveState={handleActiveState}
              activeState={activeState}
              regionHovered={regionHovered}
              states={states}
              handleRegion={handleRegion}
            />
          </Suspense>
        </div>
        <div className="flex-1 flex relative bg-orange py-[30px] pr-[15px]">
          <Suspense
            fallback={
              <ClipLoader
                size={50}
                color="#009688"
                speedMultiplier={0.6}
                cssOverride={{ borderWidth: "5px" }}
              />
            }
          >
            <RegionsColumn
              states={states}
              startIndex={0}
              endIndex={10}
              child={<StateItem label="Toata Romania" className="font-black" />}
              regionHovered={regionHovered}
              handleRegion={handleRegion}
            />
            <RegionsColumn
              states={states}
              startIndex={10}
              endIndex={21}
              regionHovered={regionHovered}
              handleRegion={handleRegion}
            />
            <RegionsColumn
              states={states}
              startIndex={21}
              endIndex={32}
              regionHovered={regionHovered}
              handleRegion={handleRegion}
            />
            <RegionsColumn
              states={states}
              startIndex={32}
              regionHovered={regionHovered}
              handleRegion={handleRegion}
            />
          </Suspense>
          <div className="w-[20px] h-[20px] bg-white rotate-45 absolute -top-[10px] left-[10px] z-[1000]" />
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
