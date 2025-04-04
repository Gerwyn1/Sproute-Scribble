import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { signIn, signUp } from "@/server/actions/users";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="text-red-500">
      <br></br>
      <br></br>
      <br></br>
      <Button onClick={signIn}>Sign In</Button>
      <Button onClick={signUp}>Sign Up</Button>
      <p>{!session ? "Not Authenticated" : session.user.name}</p>
    </main>
  );
}
