import { getLimitedUser, getUsers } from "@/ApiFunctions/adminServer";
import PaginationFunc from "@/Components/Pagination";
// import PaginationFunc from "@/Components/pagination";

export default async function Page({ searchParams }) {
  const numOfUsers = await getUsers();
  const { page } = await searchParams || { page: 1 };
  const pageNumber = +page ?? 1;

  const totalPages = Math.floor(numOfUsers.length / 5) + 1;
  console.log(pageNumber);

  const users = await getLimitedUser(pageNumber, totalPages);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md relative">
        <h1 className="text-3xl font-bold mb-6 text-center">
          User List {pageNumber}
        </h1>
        <ul className="w-full">
          {users.map((user) => (
            <li
              key={user.id}
              className="mb-2 p-2 bg-gray-200 rounded-md shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{user.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <PaginationFunc totalPages={totalPages} currentPage={pageNumber} />
    </div>
  );
}
