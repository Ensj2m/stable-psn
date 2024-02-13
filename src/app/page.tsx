import Background from "@/components/background";
import FormContainer from "@/components/form-container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen max-h-[100vh] overflow-hidden relative">
      <Background />
      <FormContainer />
    </div>
  );
}
