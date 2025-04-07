import Link from "next/link";
import AuthButtons from "@/components/navigation/auth-buttons";
import { Session } from "@/lib/auth";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <nav className="flex justify-between items-center py-3 px-4 fixed top-0 left-0 right-0 z-50 bg-slate-100">
      <Link href="/" className="text-xl font-bold">
        better-auth
      </Link>
      <AuthButtons />
    </nav>
  );
}
