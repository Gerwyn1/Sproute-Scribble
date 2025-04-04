"use client";

import { Session } from "better-auth";
import SignOut from "@/app/signout";

interface SessionProps {
  session?: Session;
  user?: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
}

export default function UserButton({ user, session }: SessionProps) {
  return (
    <div>
      <h1>
        {user?.email} {session?.userId}
      </h1>
        <SignOut />
    </div>
  );
}
