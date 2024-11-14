// import { getComments } from "@/ApiFunctions/formSubmit";
import prisma from "@/_lib/_base";
import Comments from "./Comments";
// import { Prisma } from "@prisma/client";

async function RightSideBar() {
  const data = await prisma.post.findMany();

  console.log(data);

  return (
    <div className="flex flex-col row-span-11 items-center px-5 overflow-y-scroll">
      {data.map((comment) => (
        <Comments
          key={comment.id}
          id={comment.id}
          title={comment.title}
          message={comment.content}
          like={comment.like}
        />
      ))}
    </div>
  );
}

export default RightSideBar;
