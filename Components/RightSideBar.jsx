import { getComments } from "@/ApiFunctions/formSubmit";
import Comments from "./Comments";

async function RightSideBar() {
  const data = await getComments();

  const comments = data.comments;
  return (
    <div className="flex flex-col row-span-11 items-center px-5 overflow-y-scroll">
      {comments.map((comment) => (
        <Comments
          key={comment.id}
          email={comment.email}
          message={comment.feedback}
        />
      ))}
    </div>
  );
}

export default RightSideBar;
