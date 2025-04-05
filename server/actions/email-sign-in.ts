"user server";
import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";

const action = createSafeActionClient();

export const emailSignIn = action
  .schema(LoginSchema)
  .action(async ({ parsedInput }) => {
    // check if user is in db
    const { email, password, code } = parsedInput;
    console.log(email, password, code);
    return { email };
  });
