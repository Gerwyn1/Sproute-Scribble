import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Logo from "./logo";
import UserButton from "./user-button";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default async function Nav() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/" passHref>
              <Logo />
            </Link>
          </li>
          <li>
            {!session ? (
              <Button asChild>
                <Link className="flex gap-2" href="/auth/login" passHref>
                  <LogIn size={16} />
                  <span>Login</span>
                </Link>
              </Button>
            ) : (
              <li>
                <UserButton user={session?.user} session={session?.session} />
              </li>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
