import Image from "next/image";
import Footer from "../footer";
import Form from "../form";

export default function FormContainer() {
  return (
    <main className="bg-black/90 backdrop-blur flex flex-col h-[85vh] w-full md:w-6/12 absolute left-0 top-0 justify-start items-start pb-10 pt-14 px-10 sm:px-20 sm:py-20 md:h-full md:py-10 md:px-10 lg:py-14 lg:px-14 xl:px-24 xl:py-24">
      <div className="relative w-full h-full flex flex-col justify-between">
        <div className="w-full flex flex-col justify-start gap-14 sm:gap-14 h-full">
          <div className="flex flex-col gap-4 w-full ">
            <Image
              className="relative select-none"
              src="/logo.svg"
              alt="Site Logo"
              width={90}
              height={90}
              priority
            />
            <h1 className="font-bold text-4xl sm:text-3xl text-white">
              {"Abdullah's Services"}
            </h1>
          </div>

          <Form />
        </div>

        <Footer />
      </div>
    </main>
  );
}
