"use server";

import { auth } from "@/lib/auth";

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "gerwyn@hotmail.com",
      password: "password123",
    },
  });
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "john@hotmail.com",
      name: "john",
      password: "password123",
    },
  });
};
