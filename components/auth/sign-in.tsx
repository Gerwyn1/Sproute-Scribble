"use client";

import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SignIn({ provider }: any) {
  const capitalize =
    provider.substring(0, 1).toUpperCase() + provider.substring(1);
  return (
    <Button
      onClick={async () => {
        await signIn.social({
          provider,
          callbackURL: "/",
        });
      }}
    >
      Sign In With {capitalize}
    </Button>
  );
}
