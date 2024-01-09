"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <header className="max-w-6xl flex justify-between items-center m-auto px-2">
        <div className="py-[11px]">
          <Image src="/ljm-logo-green.png" width={214} height={34} alt="logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex text-[15px]">
            <li className="px-[15px] ">
              <Link href="#">Autentificare</Link>
            </li>
            <li className="px-[15px]">
              <Link href="#">Creare Cont</Link>
            </li>
          </ul>
          <motion.a
            initial={{
              backgroundColor: "#009687",
            }}
            whileHover={{
              backgroundColor: "#00796B",
              transition: { duration: 0.3 },
            }}
            href="#"
            className="rounded-[35px] text-white font-black uppercase flex items-center px-3 my-2.5 ml-[15px] drop-shadow-xl"
          >
            <AiOutlinePlus className="w-[18px] h-[36px]" />
            adauga anunt
          </motion.a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
