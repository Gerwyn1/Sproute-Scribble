"use server";
import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { user } from "../schema";
import { db } from "@/server";
import { eq } from "drizzle-orm";

const action = createSafeActionClient();

export const emailSignIn = action
  .schema(LoginSchema)
  .action(async ({ parsedInput }) => {
    const { email, password, code } = parsedInput;
    // check if user is in db
    const existingUser = await db.query.user.findFirst({
      where: eq(user.email, email),
    });

    if (existingUser?.email !== email) {
      return { error: "Email not found" };
    }

    if (!existingUser?.emailVerified) {
      return { error: "Email not verified" };
    }

    console.log(email, password, code);
    return { success: email };
  });
