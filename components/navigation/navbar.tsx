import Link from "next/link";
import AuthButtons from "@/components/navigation/auth-buttons";
import { Session } from "@/lib/auth";
import Logo from "./logo";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <nav className="flex justify-between items-center py-3 px-4  z-50 ">
      <Link href="/" className="text-xl font-bold" passHref>
        <Logo />
      </Link>
      <AuthButtons />
    </nav>
  );
}
