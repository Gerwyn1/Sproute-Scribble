"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";

export default function signout() {
  return <Button onClick={() => signOut()}>signout</Button>;
}
