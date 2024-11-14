"use server";
import fs from 'fs';

import { helperGetComment, helperGetPath } from "@/app/api/feedback/route";
import { revalidatePath } from 'next/cache';
import prisma from '@/_lib/_base';

export async function submitAction(prevState, formData) {
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

  revalidatePath('/');

  return { message: "Feedback received", data: comment };
}

export async function formAction(prevState, formData) {

  const title = formData.get("title");
  const content = formData.get("content");

  const comment = {
    content,
    title,
  };
  console.log(comment);

  const data = await prisma.post.create({
    data: comment,
  });

  console.log(data);


  revalidatePath('/');

  return { message: "Feedback received", data: comment };
}
