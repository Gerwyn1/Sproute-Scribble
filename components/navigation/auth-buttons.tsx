"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import SignoutButton from "@/components/navigation/signout-button";
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  const { data, isPending } = useSession();
  if (isPending) return <div>Loading...</div>;

  const session = data;

  return !session ? (
    <li className="flex gap-2 justify-center">
      <Link href="/auth/sign-in">
        <Button>Sign In</Button>
      </Link>
      <Link href="/auth/sign-up">
        <Button>Sign Up</Button>
      </Link>
    </li>
  ) : (
    <li className="flex items-center gap-2">
      <SignoutButton />
    </li>
  );
}
