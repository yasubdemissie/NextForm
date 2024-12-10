import FormPage from "@/Components/FormPage";
import Context from "@/Components/Context";
import RightSideBar from "@/Components/RightSideBar";
import NavBar from "@/Components/Navbar";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});
export default async function Home() {
  // await fetch("http://localhost:3000/api");

  //  console.log(user);

  return (
    <Context>
      <div
        className={cn(
          "grid grid-cols-2 grid-rows-12 w-dvw overflow-x-hidden h-dvh bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-800",
          font.className
        )}
      >
        <NavBar />
        <FormPage />
        <RightSideBar />
      </div>
    </Context>
  );
}
