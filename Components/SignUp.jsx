"use client";
import { signUp } from "@/ApiFunctions/userServer";
import { useActionState } from "react";

export default function FormPage() {
  const [state, formAction, isPending] = useActionState(signUp, {});

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-2/5 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {state?.error?.name && (
              <p className="px-4 my-1 py-1 bg-red-500/10 text-red-500 rounded-xl">
                food
              </p>
            )}
          </div>
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
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {state?.error?.email && (
              <p className="mx-2 my-1 bg-red-500/10 text-red-500">
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
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {state?.error?.password && (
              <ul>
                {state.error.password.map((error, index) => (
                  <li
                    key={index}
                    className="mx-2 my-1 bg-red-500/10 text-red-500"
                  >
                    {error}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            disabled={isPending}
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isPending ? "...Submitting" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
