"use client";
import {useState} from "react";
import { Input } from "./ui/input";
import { AiFillCloseCircle } from "react-icons/ai";
import BurgerMenu from "@/components/ui/burger-menu.js";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import InteractiveMap from "./interactive-map";

const SearchItems = () => {
    const [searchInputText,setSearchInputText] = useState("")
    const [isActive,setIsActive] = useState(false)
  return (
    <div className="relative h-[224px] bg-[#009688] flex justify-center items-center">
      <div className="flex justify-center items-center mb-10 w-full h-[58px] gap-5">
        <div className="relative flex items-center max-w-[478px]  h-full w-full bg-white rounded-[9px] drop-shadow-xl ">
          <BurgerMenu
            width={20}
            height={20}
            className="absolute top-[19px] left-[20px]"
          />
          <Input
            placeholder="Cauta pe Lajumate.ro"
            value={searchInputText}
            onChange={(e)=>setSearchInputText(e.target.value)}
            className="h-full border-0 shadow-none focus-visible:ring-0 pl-[55px] pr-[48px] text-[18px] py-0 placeholder:text-[20px]"
          />
          {searchInputText && (
            <Button variant={"link"} onClick={()=>setSearchInputText("")}>
                <AiFillCloseCircle className="absolute top-[18px] right-[20px] w-[25px] h-[25px] text-[#bdbdbd]" />
            </Button>
          )}
        </div>
        <div className="relative flex items-center max-w-[292px]  h-full w-full bg-white rounded-[9px] drop-shadow-xl ">
          <IoLocationSharp className="absolute top-[14px] left-[15px] w-7 h-7 text-[#767676]" />
          <Input
            onFocus={()=>setIsActive(true)}
            placeholder={isActive ? "Introdu locatia..." : "Toata Romania"}
            className={`h-full border-0 shadow-none focus-visible:ring-0 pl-[55px] pr-[48px] text-[18px] py-0 placeholder:text-[20px] placeholder:${isActive ? null : "text-black"}`}
          />
        
        </div>
        <Button className="drop-shadow-xl w-[140px] h-full bg-[#80CBC4] text-black text-[18px] font-normal text-[#00594f] hover:bg-[#91e6dd] ">
          CAUTA
        </Button>
      </div>
      {isActive && (<InteractiveMap/>)}
    </div>
  );
};

export default SearchItems;
