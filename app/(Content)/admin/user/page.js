import { getLimitedUser, getUsers } from "@/ApiFunctions/adminServer";
import Pagination from "@/Components/Pagination";

export default async function Page({ searchParams }) {
  const numOfUsers = await getUsers();
  const page = Number(searchParams?.page) || 1;
  
  const users = await getLimitedUser(page);
  const totalPages = Math.ceil(numOfUsers.length / 10);

  return (
    <Pagination totalPages={totalPages}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            User List {page}
          </h1>
          <ul className="w-full">
            {users.map((user) => (
              <li
                key={user.id}
                className="mb-4 p-4 bg-gray-200 rounded-md shadow-sm"
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
      </div>
    </Pagination>
  );
}
