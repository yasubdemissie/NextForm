import FormPage from "@/Components/Form2";
import Context from "@/Components/Context";
import RightSideBar from "@/Components/RightSideBar";

export default async function Home() {
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
