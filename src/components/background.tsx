import Image from "next/image";

export default function Background() {
  return (
    <div className="bg-blue-200 absolute top-0 right-0 w-6/12 overflow-hidden h-full">
      <div className="relative w-full h-full">
        <Image
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
