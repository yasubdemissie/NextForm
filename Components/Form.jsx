"use client";

import { useForm } from "react-hook-form";
import { submitForm } from "@/ApiFunctions/formSubmit";

function FormPage() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    const data = await submitForm(values);
    console.log(data);
    reset();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-2/5 p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors?.email && (
              <p className="text-red-500 bg-red-500/3 text-sm italic">
                {errors.email.message}
              </p>
            )}
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
              {...register("feedback", {
                defaultValue: "your feedback",
                required: "This field is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
            {errors?.feedback && (
              <span className="text-red-500 text-sm italic">
                {errors.feedback.message}
              </span>
            )}
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
