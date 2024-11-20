// import { getComments } from "@/ApiFunctions/formSubmit";
import prisma from "@/_lib/_base";
import Comments from "./Comments";
import { getUserById } from "@/ApiFunctions/userServer";
// import { Prisma } from "@prisma/client";

async function RightSideBar() {
  const data = await prisma.post.findMany();
  const users = await Promise.all(
    data.map(async (comment) => await getUserById(comment.authorId))
  );
  console.log(users);

  return (
    <div className="flex flex-col row-span-11 items-center px-5 overflow-y-scroll">
      {data.map((comment, i) => (
        <Comments
          key={comment.id}
          userName={users[i].name}
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
