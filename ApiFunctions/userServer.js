"use server";

import prisma from "@/_lib/_base";
import { SignupFormSchema } from "@/_lib/dbSchema";
import { createSession, deleteSession } from "@/_lib/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function signUp(prevState, formData) {
  // Getting data from the form
  const data = {
    name: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  // Validating the form data
  const validateData = SignupFormSchema.safeParse(data);

  if (!validateData.success) {
    console.error(validateData.error.flatten().fieldErrors);
    return { error: validateData.error.flatten().fieldErrors };
  }

  const { name, email, password } = validateData.data;

  // Hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Writing it into the database
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  await createSession(user.id).then(() => {
    redirect("/home");
  });
}

export async function loginUser(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // const validate = SignupFormSchema.safeParse({ email, password });

  // if (!validate.success) {
  //   console.error(validate.error.flatten().fieldErrors);
  //   return { error: validate.error.flatten().fieldErrors };
  // }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: { email: "User not found" } };
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return { error: { password: "Incorrect password" } };
  }

  await createSession(user.id);

  redirect("/home");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}

export async function getUser(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  const { id, email, username } = user; 

  return user;
}
