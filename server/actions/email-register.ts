"use server";
import { createSafeActionClient } from "next-safe-action";
import { user } from "../schema";
import { db } from "@/server";
import { eq } from "drizzle-orm";
import { RegisterSchema } from "@/types/register-schema";
import bcrypt from "bcryptjs";
import { generateEmailVerificationToken } from "./tokens";

const action = createSafeActionClient();

export const emailRegister = action
  .schema(RegisterSchema)
  .action(async ({ parsedInput }) => {
    const { name, email, password } = parsedInput;
    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // check if user's email is in db, if not, register user and send verification email
    const existingUser = await db.query.user.findFirst({
      where: eq(user.email, email),
    });
    if (existingUser) {
      if (!existingUser?.emailVerified) {
        const verificationToken = await generateEmailVerificationToken(email);
        // await sendVerificationEmail();

        return { success: "Email Confirmation resent" };
      }
      return { error: "Email already in use" };
    }

    // Logic for when user is not registered

    await db.insert(user).values({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const verificationToken = await generateEmailVerificationToken(email);

    // await sendVerificationEmail();

    return { success: "Confirmation Email Sent!" };
  });
