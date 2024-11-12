import { getComments } from "@/ApiFunctions/formSubmit";

export default async function Comments({ email, message }) {
  const name = email.split("@")[0];
  return (
    <div className="flex justify-start rounded-2xl my-2 flex-col w-full bg-white shadow-md px-6 py-3">
      <h2 className=" text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-2">{message}</p>
    </div>
  );
}
