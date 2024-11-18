"use client";
import { loginUser } from "@/ApiFunctions/userServer";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [state, formAction, isPending] = useActionState(loginUser, {});

  useEffect(() => {
    if (state?.error?.email) {
      toast.error(state.error.email);
    }
  }, [state?.error?.email]);

  return (
    <div className="flex items-center justify-center h-fit bg-gray-100">
      <div className="w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              defaultValue={"yasdam777@gmail.com"}
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {state?.error?.email && (
              <p className="text-red-500 text-sm italic mt-1 hidden">
                {state.error.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              defaultValue={"1234qwer["}
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {state?.error?.password && (
              <p className="text-red-500 text-sm italic mt-1 hidden">
                {state.error.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isPending ? "Logining in" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}