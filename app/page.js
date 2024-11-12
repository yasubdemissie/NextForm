import Image from "next/image";
import FormPage from "@/Components/Form";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex flex-row items-center"></div>
      <div className="flex flex-col items-center">
        <FormPage />
      </div>
    </div>
  );
}
