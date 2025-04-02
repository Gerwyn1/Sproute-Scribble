import { Button } from "@/components/ui/button";
import { signIn, signUp } from "@/lib/auth-client";

export default async function Home() {
  return (
    <main className="text-red-500">
      <h1>Hello there</h1>
      <Button>Click me!</Button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signUp}>Sign Up</button>
    </main>
  );
}
