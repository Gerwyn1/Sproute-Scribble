"use server";
import { user } from "@/server/schema";

import { eq } from "drizzle-orm";
import { emailTokens } from "../schema";
import { db } from "@/server";

const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.query.emailTokens.findFirst({
      where: eq(emailTokens.token, email),
    });
    return verificationToken;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
};

export const generateEmailVerificationToken = async (email: string) => {
  const token = crypto.randomUUID();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.delete(emailTokens).where(eq(emailTokens.id, existingToken.id));
  }

  const verificationToken = await db
    .insert(emailTokens)
    .values({
      email,
      token,
      expires,
    })
    .returning();
  return verificationToken;
};

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByEmail(token);
  if (!existingToken) return { error: "Token not found" };

  const hasExpired = new Date(existingToken!.expires) < new Date();
  if (hasExpired) return { error: "Token has expired" };

  const existingUser = await db.query.user.findFirst({
    where: eq(user.email, existingToken!.email),
  });

  if (!existingUser) return { error: "Email does not exist" };

  await db
    .update(user)
    .set({
      verify: new Date(),
    })
    .where(eq(user.id, existingUser.id));

  await db.delete(emailTokens).where(eq(emailTokens.id, existingToken!.id));

  return { success: "Email Verified" };
};
