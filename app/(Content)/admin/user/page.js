import {
  getPaginationUser,
  getUserByName,
  getUsers,
} from "@/ApiFunctions/adminServer";
import Input from "@/Components/Input";
import PaginationFunc from "@/Components/Pagination";
import SpinningBest from "@/Components/SpinningBest/SpinningBest";
// import PaginationFunc from "@/Components/pagination";

export default async function Page({ searchParams }) {
  const numOfUsers = await getUsers();
  const { page, name } = (await searchParams) || { page: 1 };
  const pageNumber = parseInt(page) ?? 1;

  const totalPages = Math.floor(numOfUsers.length / 5) + 1;

  if (typeof pageNumber !== "number" || pageNumber <= 0)
    return <SpinningBest />;

  console.log(pageNumber, name);
  const users = name
    ? await getUserByName(name)
    : await getPaginationUser(pageNumber, totalPages); //

  return (
    <div className="max-h-screen mt-5 flex flex-col items-center justify-center">
      <Input />
      <div className="w-full max-w-2xl px-2 rounded-lg border-2 relative">
        <ul className="w-full">
          <li className="py-3 px-2 mb-3 text-gray-400 italic">
            <div className="flex justify-between items-center">
              <p className="text-md">Name</p>
              <p className="text-sm">Email</p>

              <p className="text-sm">Role</p>
              <p className="text-sm">Created</p>
            </div>
          </li>
          {users.map((user) => (
            <li
              key={user.id}
              className="py-5 px-2 border-black border-b-1 cursor-pointer rounded-md shadow-sm"
            >
              <div className="grid grid-cols-4">
                <p className="text-md">{user.name}</p>
                <p className="text-sm text-gray-600 flex ps-10 items-end">
                  {user.email}
                </p>

                <p className="text-sm text-gray-600 flex justify-end items-end">
                  {user.role}
                </p>
                <p className="text-sm text-gray-600 flex justify-end items-end">
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    weekday: "short",
                  })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <PaginationFunc totalPages={totalPages} currentPage={pageNumber} />
    </div>
  );
}
