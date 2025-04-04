import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { signIn, signUp } from "@/server/actions/users";
import { headers } from "next/headers";
import SignOut from "./signout";
import SignIn from "@/components/signin";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="text-red-500">
      <Button onClick={signIn}>Sign In</Button>
      <Button onClick={signUp}>Sign Up</Button>
      {/* <SignOut /> */}
      <p>{!session ? "Not Authenticated" : session.user.name}</p>
      <SignIn provider='github'/>
      <SignIn provider='google'/>
      
    </main>
  );
}
