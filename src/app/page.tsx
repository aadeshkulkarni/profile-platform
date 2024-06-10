/* eslint-disable @next/next/no-img-element */
"use client";
import Appbar from "@/components/Appbar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const session = useSession();
  console.log("Session: ", session);
  if (session.status !== "authenticated") {
    router.push("/signin");
  }
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-gray-700 via-zinc-800 to-slate-900">
      <Appbar />
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-lg p-4">Welcome to Profile Platform</h1>
        <Link className="bg-white px-4 py-2 text-black rounded-full" href="/user">
          View your Profile
        </Link>
		<Link className="bg-white px-4 py-2 text-black rounded-full" href="/user/edit">
          Edit your Profile
        </Link>
      </div>
    </main>
  );
}
