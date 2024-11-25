import Button from "@/Components/Button";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Page</h1>
        <p className="text-lg mb-6 text-center">
          Welcome to the admin dashboard. Use the links below to manage users
          and posts.
        </p>
        <ul className="mb-6">
          <li className="mb-4">
            <Link className="text-blue-500 hover:underline" href="/admin/user">
              User Management
            </Link>
          </li>
          <li className="mb-4">
            <Link className="text-blue-500 hover:underline" href="/admin/post">
              Post Management
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className="text-blue-500 hover:underline"
              href="/admin/administrators"
            >
              Administrator Management
            </Link>
          </li>
        </ul>
        <Button className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Logout
        </Button>
      </div>
    </div>
  );
}
