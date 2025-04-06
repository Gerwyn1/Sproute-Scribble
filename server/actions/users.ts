"use server";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "depressionnn1000@gmail.com",
      name: "john",
      password: "password123",
    },
  });
};
