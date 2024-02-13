import Background from "@/components/background";
import Form from "@/components/form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen max-h-[100vh] overflow-hidden relative">
      <Background />
      <Form />
    </div>
  );
}
