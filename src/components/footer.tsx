import { FaTelegramPlane, FaYoutube, FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { ReactNode } from "react";

interface Props {}

export default function Footer({}: Props) {
  return (
    <div
      className={`
        w-full bg-red-200 flex flex-row gap-2
      `}
    >
      <Item>
        <FaTelegramPlane size={10} />
      </Item>
      <Item>
        <FaYoutube />
      </Item>
      <Item>
        <RiInstagramFill />
      </Item>
    </div>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
