import { useEffect } from "react";
import Link from "next/link";
import { SiPhotobucket } from "react-icons/si";
import { useSession } from "next-auth/react";

export function Nav() {

  return (
    <nav className="flex justify-between items-center bg-[#F0ECE5] py-3 px-3 md:px-12 lg:px-16">
      <Link href="/">
        <SiPhotobucket className="text-[#31304D] text-3xl" />
      </Link>

      {
        session
          ?
          <Link
            className="border-b-2 border-[#31304D] text-[#31304D] py-3"
            href="/dashboard">Dashboard</Link>
          :
          <Link
            className="border-b-2 border-[#31304D] text-[#31304D] py-3"
            href="/auth/signin">Sign in</Link>
      }
    </nav>
  )
}