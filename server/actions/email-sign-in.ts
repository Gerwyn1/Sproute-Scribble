"use server";
import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { user } from "../schema";
import { db } from "@/server";
import { eq } from "drizzle-orm";
import { generateEmailVerificationToken } from "./tokens";
import { sendVerificationEmail } from "./email";
import { signIn } from "./users";

const action = createSafeActionClient();

export const emailSignIn = action
  .schema(LoginSchema)
  .action(async ({ parsedInput }) => {
    const { email, password, code } = parsedInput;

    try {
      // check if user is in db
      const existingUser = await db.query.user.findFirst({
        where: eq(user.email, email),
      });

      if (existingUser?.email !== email) {
        return { error: "Email not found" };
      }

      if (!existingUser?.verify) {
        const verificationToken = await generateEmailVerificationToken(email);
        await sendVerificationEmail(
          verificationToken[0].email,
          verificationToken[0].token
        );
        return { success: "Confirmation Email Sent!" };
      }
      console.log("test log222222222222222");

      // 2FA TODO

      await signIn(email, password);
 console.log("test log333333333333333");
      return { success: email };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return { error: "Something went wrong" };
    }
  });
