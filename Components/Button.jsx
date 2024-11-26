"use client";

import { useRouter } from "next/navigation";

const Button = ({ onClick, children, className, back = false }) => {

  const router = useRouter();

  if (back) {
    return (
      <button
        onClick={() => router.push('/admin')}
        className="rounded border-2 absolute top-2 left-2 px-1"
        type="button"
      >
        &larr;
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
