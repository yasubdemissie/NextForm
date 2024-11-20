import FormPage from "@/Components/FormPage";
import Context from "@/Components/Context";
import RightSideBar from "@/Components/RightSideBar";
import NavBar from "@/Components/Navbar";

export default async function Home() {
  // await fetch("http://localhost:3000/api");

  //  console.log(user);

  return (
    <Context>
      <div className="grid grid-cols-2 grid-rows-12 w-dvw overflow-x-hidden h-dvh">
        <NavBar />
        <FormPage />
        <RightSideBar />
      </div>
    </Context>
  );
}
