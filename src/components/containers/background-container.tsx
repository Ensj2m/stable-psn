import Image from "next/image";

export default function Background() {
  return (
    <div className="hidden bg-black md:flex absolute bottom-0 right-0 sm:top-0 sm:right-0 w-full md:w-6/12 overflow-hidden h-full">
      <div className="relative w-full h-full">
        <Image
          priority
          src="/background.webp"
          alt="Background"
          height={1920}
          width={1080}
          className="object-cover absolute w-full h-full"
        />
      </div>
    </div>
  );
}
