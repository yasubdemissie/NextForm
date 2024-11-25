import { getPaginationUser, getUsers } from "@/ApiFunctions/adminServer";
import PaginationFunc from "@/Components/Pagination";
import SpinningBest from "@/Components/SpinningBest/SpinningBest";
// import PaginationFunc from "@/Components/pagination";

export default async function Page({ searchParams }) {
  const numOfUsers = await getUsers();
  const { page } = (await searchParams) || { page: 1 };
  const pageNumber = parseInt(page) ?? 1;

  const totalPages = Math.floor(numOfUsers.length / 5) + 1;
  console.log(pageNumber);

  if (typeof pageNumber !== "number" || pageNumber <= 0)
    return <SpinningBest />;

  const users = await getPaginationUser(pageNumber, totalPages);

  return (
    <div className="max-h-screen mt-5 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl px-2 rounded-lg relative grid grid-cols-7 space-x-24 text-gray-500">
        <input
          type="text"
          className="w-full h-14 px-3 rounded-lg border-2 mb-10 col-span-4"
          placeholder="search"
        />
        <select className="w-full col-span-2 border-2 h-14 rounded-lg focus:border-gray-400/40 focus:ring-1 focus:ring-blue-500/0 focus:outline-none px-4 py-2 bg-white text-gray-700">
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="role">Role</option>
          <option value="createdAt">Created At</option>
          <option value="updatedAt">Updated At</option>
          <option value="status">Status</option>
        </select>
      </div>
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
