"use server";
import { createSafeActionClient } from "next-safe-action";
import { user } from "../schema";
import { db } from "@/server";
import { eq } from "drizzle-orm";
import { RegisterSchema } from "@/types/register-schema";
import bcrypt from "bcryptjs";

const action = createSafeActionClient();

export const emailRegister = action
  .schema(RegisterSchema)
  .action(async ({ parsedInput }) => {
    const { name, email, password } = parsedInput;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(password, " | ", hashedPassword);
    // check if user is in db
    const existingUser = await db.query.user.findFirst({
      where: eq(user.email, email),
    });

    // check if user's email is in db, if not, register user and send verification email
    if (existingUser) {
      // if (!existingUser?.emailVerified) {
      //   const verificationToken =
      // }
      return { error: "Email already in use" };
    }

    return { success: "yay!" };

    // if (existingUser?.email === email) {
    //   return { error: "Email already used" };
    // }

    // // store user in db
    // const newUser = await db.query.user.create({
    //   data: {
    //     name,
    //     email,
    //     hashedPassword
    //   }
    // })

    // if (!existingUser?.emailVerified) {
    //   return { error: "Email not verified" };
    // }

    // console.log(email, password, code);
    // return { success: email };
  });
