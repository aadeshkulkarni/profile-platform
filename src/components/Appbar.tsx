import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Appbar = () => {
  const session = useSession();
  const isAuthenticated = session.status === "authenticated";
  return (
    <div className="h-100px shadow-md shadow-gray-900 w-full flex items-center justify-between p-4">
		<Link href="/" className="px-4 text-lg font-bold">
			Profile Platform	
		</Link>
      {isAuthenticated ? (
        <div className="flex justify-center items-center gap-4">
          <div>{session?.data?.user?.name}</div>
          <button
            className="px-4 py-2 bg-black text-xs tracking-wide rounded-md text-white shadow-lg mx-2"
            onClick={() => signOut()}
          >
            Signout
          </button>
        </div>
      ) : (
        <button
          className="px-4 py-2 bg-black text-xs tracking-wide rounded-md text-white shadow-lg"
          onClick={() => signIn()}
        >
          Signin
        </button>
      )}
    </div>
  );
};

export default Appbar;
