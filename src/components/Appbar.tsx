import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Appbar = () => {
	const session = useSession();
	const isAuthenticated = session.status === "authenticated";
	return (
		<div className="h-100px shadow-md w-full flex justify-end p-4">
			{isAuthenticated ? (
				<button
					className="px-4 py-2 bg-black text-xs tracking-wide rounded-md text-white shadow-lg mx-2"
					onClick={() => signOut()}
				>
					Signout
				</button>
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
