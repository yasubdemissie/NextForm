"use client";

import { submitAction } from "@/ApiFunctions/serverFunc";
import { useActionState } from "react";

function FormPage() {
  const [state, formAction] = useActionState(submitAction, {});

  return (
    <div className="flex flex-col row-span-11 justify-center items-center bg-gray-100 p-0">
      <div className="w-3/5 p-6 bg-white rounded-lg shadow-md">
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
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700"
            >
              Feedback:
            </label>
            <textarea
              id="feedback"
              name="feedback"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
