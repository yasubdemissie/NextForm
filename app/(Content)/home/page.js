import FormPage from "@/Components/FormPage";
import Context from "@/Components/Context";
import RightSideBar from "@/Components/RightSideBar";

export default async function Home() {

   await fetch('http://localhost:3000/api');

  return (
    <Context>
      <div className="grid grid-cols-2 grid-rows-12 w-dvw overflow-x-hidden h-dvh">
        <h1 className="col-span-2 row-span-1 pt-2 flex items-center justify-center h-20">
          Home
        </h1>
        <FormPage />
        <RightSideBar />
      </div>
    </Context>
  );
}
