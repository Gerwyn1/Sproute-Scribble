import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Logo from "./logo";
import UserButton from "./user-button";

export default async function Nav() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/home">
              <Logo />
            </a>
          </li>
          <li>
            <a href="/home">
              <UserButton user={session?.user} session={session?.session} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
