"use client";

import { formAction as submitter } from "@/ApiFunctions/serverFunc";
import { useActionState } from "react";

function FormPage() {
  const [state, formAction, isPending] = useActionState(submitter, {});

  return (
    <div className="flex flex-col row-span-11 justify-center items-center bg-gray-100 p-0">
      <div className="w-3/5 p-6 bg-white rounded-lg shadow-md">
        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content:
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Write your post here"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isPending}
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
