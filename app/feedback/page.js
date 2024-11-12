// import { useForm } from "react-hook-form";

// function FeedbackForm() {
//   const { register, handleSubmit, reset } = useForm();

//   function submitting(values) {
//     console.log(values);
//     reset();
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-2/5 p-6 bg-white rounded-lg shadow-md">
//         <form onSubmit={handleSubmit(submitting)}>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               {...register("email")}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="feedback"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Feedback:
//             </label>
//             <textarea
//               id="feedback"
//               {...register("feedback")}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FeedbackForm;
import FormPage from "@/Components/Form";

export default function FeedbackForm() {
  return (
    <div>
      <FormPage />
    </div>
  );
}
