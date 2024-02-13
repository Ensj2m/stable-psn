import { FaTelegramPlane, FaYoutube, FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { ReactNode } from "react";

interface Props {}

export default function Footer({}: Props) {
  return (
    <div
      className={`
        w-full flex flex-row sm:gap-4 gap-6 sm:justify-start justify-center 
      `}
    >
      <Item>
        <FaTelegramPlane
          size={30}
          className="sm:text-white/20 text-white hover:scale-110 hover:text-white cursor-pointer duration-300"
        />
      </Item>
      <Item>
        <FaYoutube
          size={30}
          className="sm:text-white/20 text-white hover:scale-110 hover:text-white cursor-pointer duration-300"
        />
      </Item>
      <Item>
        <RiInstagramFill
          size={30}
          className="sm:text-white/20 text-white hover:scale-110 hover:text-white cursor-pointer duration-300"
        />
      </Item>
    </div>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
