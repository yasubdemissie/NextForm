// import { getUser } from "@/DAL/DataAccessLayer";
import { getUser } from "@/DAL/DataAccessLayer";
import Image from "next/image";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export default async function NavBar() {
  const user = await getUser();
  return (
    <nav className="bg-gray-800 col-span-2 row-span-1 pt-2 flex items-center justify-center">
      <ul className="flex items-center justify-between w-full max-w-screen-lg">
        <li className="text-white text-lg">
          <Link href="/">Home</Link>
        </li>
        <div className="flex items-center justify-around space-x-4">
          <li>
            <span className="font-xl italic text-white">{user.name}</span>
          </li>
          <li className="">
            <Image
              src="/userImage.jpg"
              alt="User Image"
              width={40}
              height={40}
              className="rounded-full"
            />
          </li>
          <li>
            <LogoutButton className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Logout
            </LogoutButton>
          </li>
        </div>
      </ul>
    </nav>
  );
}
