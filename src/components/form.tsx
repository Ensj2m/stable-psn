"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

interface Props {}

type ResponseData = {
  message: string;
  src?: string;
};

export default function Form({}: Props) {
  const [responseMessage, setResponseMessage] = useState<null | string>(null);
  const [src, setSrc] = useState<null | string>(null);

  async function formHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const sku = event.currentTarget.sku.value;
    const token = event.currentTarget.token.value;

    const formData = {
      sku,
      token,
      region: "ar-AE",
      add: "Submit",
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData: ResponseData = await response.json();
        setResponseMessage(responseData.message);
        if (responseData.src) {
          setSrc(responseData.src);
        }
        console.log(responseData);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <>
      {responseMessage ? (
        <div
          onClick={() => setResponseMessage(null)}
          className="cursor-pointer text-center absolute z-50 font-bold top-0 right-0 w-full h-full bg-[#F2421B] justify-between py-24 items-center flex text-black rounded-2xl flex-col rounded-tl-none font-mono px-6"
        >
          {responseMessage}
          {src && <Image src={src} alt="Avatar" />}
          <p className="pb-1 pt-1.5 px-3 rounded-full font-mono bg-black text-[#F2421B] font-bold">
            Close
          </p>
        </div>
      ) : (
        <form
          autoComplete="off"
          onSubmit={formHandler}
          className="gap-10 sm:gap-8 flex flex-col w-full"
        >
          <div className=" relative w-full overflow-hidden rounded-md ring-1 ring-white/20 focus-within:ring-[#D16014]/50 focus-within:ring-2">
            <input
              required
              minLength={15}
              name="sku"
              placeholder="Avatar ID"
              className="bg-transparent text-white font-medium appearance-none h-full w-full py-2.5 px-2.5 placeholder-white/40 autofill:bg-transparent"
            />
          </div>
          <div className="relative w-full overflow-hidden rounded-md ring-1 ring-white/20 focus-within:ring-[#D16014]/50 focus-within:ring-2">
            <input
              required
              minLength={20}
              name="token"
              placeholder="Auth Token (Pdccws_p)"
              className="bg-transparent text-white font-medium appearance-none h-full w-full py-2.5 px-2.5 placeholder-white/40 autofill-selected:bg-black"
            />
          </div>
          <button
            type="submit"
            className="mt-2 sm:mt-0 bg-white text-black w-full sm:w-fit px-2.5 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}
