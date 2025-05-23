"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import LoadingButton from "@/components/loading-button";
import { useState } from "react";

export default function SignoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleSignOut = async () => {
    try {
      setPending(true);
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/auth/sign-in");
            router.refresh();
          },
        },
      });
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setPending(false);
    }
  };

  return (
    <LoadingButton pending={pending} onClick={handleSignOut}>
      Sign Out
    </LoadingButton>
  );
}
