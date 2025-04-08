import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="text-red-500">
      <p>{!session ? "Not Authenticated" : session.user.name}</p>
    </main>
  );
}
