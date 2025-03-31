"use server";

import { db } from "@/server";
import { posts } from "../schema";
import { revalidatePath } from "next/cache";

export default async function createPost(formData: FormData): Promise<void | unknown | never> {
  const title = formData.get("title")?.toString();
  if (!title) {
    return { error: "title is required" };
  }
  revalidatePath('/')
  const post = await db.insert(posts).values({
    title,
  });

  const parsedPost = JSON.parse(JSON.stringify(post));

  return { success: parsedPost };
}
