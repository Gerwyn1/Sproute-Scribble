"use client";

import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SignIn({ provider }: any) {
  const capitalize =
    provider.substring(0, 1).toUpperCase() + provider.substring(1);
  return (
    <Button
      variant="outline"
      className="flex gap-4 w-full"
      onClick={async () => {
        await signIn.social({
          provider,
          callbackURL: "/",
        });
      }}
    >
      <p>Sign In With {capitalize}</p>
      {provider === "google" && <FaGoogle size={32}  />}
      {provider === "github" && <FaGithub  />}
    </Button>
  );
}