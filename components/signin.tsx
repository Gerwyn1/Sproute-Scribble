"use client";

import { signIn } from "@/lib/auth-client";
import { Button } from "./ui/button";

export default function SignIn({provider}) {
  return (
    <Button
      onClick={async () => {
        await signIn.social({
          provider,
          callbackURL: "/",
        });
      }}
    >
      Sign In With {provider}
    </Button>
  );
}
