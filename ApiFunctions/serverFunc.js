"use server";
import fs from "fs";

import { helperGetComment, helperGetPath } from "@/app/api/feedback/route";
import { revalidatePath } from "next/cache";
import prisma from "@/_lib/_base";
import { getUser, verifySession } from "@/DAL/DataAccessLayer";
import { redirect } from "next/navigation";

export async function submitAction(prevState, formData) {
  const verified = await verifySession();

  if (!verified) redirect("/");

  const email = formData.get("email");
  const feedback = formData.get("feedback");

  const comment = {
    feedback,
    email,
    id: new Date().toISOString(),
  };

  const filepath = helperGetPath();
  const data = helperGetComment(filepath);

  data.push(comment);

  fs.writeFileSync(filepath, JSON.stringify(data));

  revalidatePath("/");

  return { message: "Feedback received", data: comment };
}

export async function AddFeedBack(prevState, formData) {
  const verified = await verifySession();

  if (!verified) redirect("/");
  try {
    const title = formData.get("title");
    const content = formData.get("content");

    const comment = {
      content,
      title,
    };
    const user = await getUser();

    const poster = { authorId: user.id, ...comment };

    await prisma.post.create({
      data: poster,
    });

    revalidatePath("/home");

    return { message: "Feedback received", data: comment };
  } catch (err) {
    console.log("Can't get the user", err);
    return { error: "Can't get the user" };
  }
}

export async function deleteFeedback(id = 1) {
  const verified = await verifySession();

  if (!verified) redirect("/");
  await prisma.post.delete({
    where: {
      id: id,
    },
  });

  console.log(`deleting ${id}`);

  revalidatePath("/");
}
