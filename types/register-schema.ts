import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(4, {
    message: "Please add a name at least 4 characters long",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password must have at least 8 characters long",
  }),
});
