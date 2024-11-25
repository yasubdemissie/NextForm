import prisma from "@/_lib/_base";
import { Prisma as prim } from "@prisma/client";
import { cache } from "react";

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function getLimitedUser(page = 1, num = 10) {
  const users = await prisma.user.findMany({
    skip: (page - 1) * num,
    take: num,
  });
  return users;
}

export const getPaginationUser = cache(async (pageNum = 1, userNum = 10) => {
  const skip = (pageNum - 1) * userNum || 10;
  const users = await prisma.user.findMany({
    take: userNum,
    skip: skip ?? 0,
  });
  return users;
});
export async function getUser(id) {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
}

export async function getUserByEmail(email) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user;
}

import { Prisma } from "@prisma/client";

export async function getUserByName(name) {
  const query = `%${name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, "")}%`; // Add wildcard for SQL LIKE
  const users = await prisma.$queryRaw(
    prim.sql`SELECT * FROM "User" WHERE LOWER(name) LIKE ${query}`
  );
  return users;
}

export async function createUser(data) {
  const user = await prisma.user.create({
    data,
  });
  return user;
}

export async function updateUser(id, data) {
  const user = await prisma.user.update({
    where: { id },
    data,
  });
  return user;
}

export async function deleteUser(id) {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
}

export async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export async function getPost(id) {
  const post = await prisma.post.findUnique({
    where: { id },
  });
  return post;
}

export async function createPost(data) {
  const post = await prisma.post.create({
    data,
  });
  return post;
}

export async function updatePost(id, data) {
  const post = await prisma.post.update({
    where: { id },
    data,
  });
  return post;
}

export async function deletePost(id) {
  const post = await prisma.post.delete({
    where: { id },
  });
  return post;
}

export async function getAdministrators() {
  const administrators = await prisma.user.findMany({
    where: { role: "ADMIN" },
  });
  return administrators;
}
