// "use client";

import SignIn from "@/components/auth/sign-in";

export default function Socials() {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <SignIn provider="google" />
      <SignIn provider="github" />
    </div>
  );
}
