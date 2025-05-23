import Link from "next/link";
import { Session } from "@/lib/auth";
import Logo from "./logo";
import { Button } from "../ui/button";
import UserButton from "./user-button";
import { LogIn } from "lucide-react";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between items-center md:gap-8 gap-4">
          <li className="flex flex-1">
            <Link href="/" aria-label="sprout and scribble logo">
              <Logo />
            </Link>
          </li>
          <li className="relative flex items-center hover:bg-muted">
            {/* <CartDrawer /> */}
            CartDrawer
          </li>
          {!session ? (
            <li className="flex items-center justify-center">
              <Button asChild>
                <Link className="flex gap-2" href="/auth/sign-in">
                  <LogIn size={16} />
                  <span>Login</span>
                </Link>
              </Button>
            </li>
          ) : (
            <li className="flex items-center justify-center">
              <UserButton session={session} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
