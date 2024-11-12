import Image from "next/image";
import FormPage from "@/Components/Form";
import Comments from "@/Components/Comments";

export default function Home() {
  return (
    <div className="grid grid-cols-2 grid-rows-100 w-dvw min-h-dvh">
      <h1 className="col-span-2 row-span-5 pt-2 flex items-center justify-center h-20">
        Home
      </h1>
      <div className="flex flex-col h-dvh items-center p-0">
        <FormPage />
      </div>
      <div className="flex flex-col h-dvh items-center px-5">
        <Comments />
        <Comments />
        <Comments />
      </div>
    </div>
  );
}
