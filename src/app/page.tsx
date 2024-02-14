import Background from "@/components/containers/background-container";
import FormContainer from "@/components/containers/form-container";

export default function Home() {
  return (
    <div className="bg-black min-h-screen max-h-[100vh] overflow-hidden relative">
      <Background />
      <FormContainer />
    </div>
  );
}
