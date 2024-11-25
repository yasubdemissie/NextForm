'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Input() {
    const router = useRouter();
    const [value, setValue] = useState("");

    useEffect(() => {
        const params = new URLSearchParams();
        params.set('name', value);

        router.push(`?name=${value}`);
    }, [value, router]);
  return (
    <div className="w-full max-w-2xl px-2 rounded-lg relative grid grid-cols-7 space-x-24 text-gray-500">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
  );
}

export default Input;
