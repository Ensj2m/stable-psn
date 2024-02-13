import Image from "next/image";
import Footer from "./footer";

export default function Form() {
  return (
    <main className="bg-black flex flex-col h-full w-6/12 absolute left-0 top-0 justify-start items-center p-24">
      <div className="relative w-full h-4/5 flex flex-col justify-around">
        <div className="flex flex-col gap-4 w-full ">
          <Image
            className="relative"
            src="/logo.svg"
            alt="Site Logo"
            width={90}
            height={90}
            priority
          />
          <h1 className="font-bold text-3xl text-white">Abdullah's Services</h1>
        </div>

        <form className=" gap-8 flex flex-col bg-black w-full">
          <div className=" relative w-full overflow-hidden rounded-md ring-1 ring-white/20 focus-within:ring-[#D16014]/50 focus-within:ring-2">
            <input
              placeholder="Avatar ID"
              className="bg-transparent text-white font-medium appearance-none h-full w-full py-2.5 px-2.5 placeholder-white/40"
            />
          </div>
          <div className=" relative w-full overflow-hidden rounded-md ring-1 ring-white/20 focus-within:ring-[#D16014]/50 focus-within:ring-2">
            <input
              placeholder="Auth Token (Pdccws_p)"
              className="bg-transparent text-white font-medium appearance-none h-full w-full py-2.5 px-2.5 placeholder-white/40"
            />
          </div>

          <button className="bg-white text-black w-fit px-2.5 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
