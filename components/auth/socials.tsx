// "use client";

import SignIn from "@/components/auth/sign-in";

export default function Socials() {
  return (
    <div>
      <SignIn provider="google" />
      <SignIn provider="github" />
    </div>
  );
}
