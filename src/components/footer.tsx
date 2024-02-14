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
      <Item href="https://t.me/abdullahservice">
        <FaTelegramPlane
          size={30}
          className="text-white hover:scale-110 hover:text-white cursor-pointer duration-300"
        />
      </Item>
      <Item href="https://youtube.com/@ab6.?si=ibUecGWRi8toEu-O">
        <FaYoutube
          size={30}
          className="text-white hover:scale-110 hover:text-white cursor-pointer duration-300"
        />
      </Item>
      <Item href="https://instagram.com/Ejr2m">
        <RiInstagramFill
          size={30}
          className="text-white hover:scale-110 hover:text-white cursor-pointer duration-300"
        />
      </Item>
    </div>
  );
}

function Item({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
}
