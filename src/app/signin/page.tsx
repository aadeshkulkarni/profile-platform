/* eslint-disable react/no-unescaped-entities */
"use client";
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function () {
	const router = useRouter();
	const session = useSession();
	if(session.status==="authenticated") {
		router.push("/");
	}
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-r from-emerald-400 to-cyan-400">
			<div className="w-full md:w-[400px] flex flex-col justify-center items-center gap-4 shadow-lg p-4 md:p-12 md:bg-black md:bg-opacity-10">
				<h1 className="text-xl font-semibold tracking-tight">Let's get started</h1>
				<div className="w-full flex flex-col justify-center items-center gap-4">
					<input
						className="p-4 py-2 border border-gray-200 rounded-md w-full"
						type="text"
						placeholder="Email"
					/>
					<input
						className="p-4 py-2 border border-gray-200 rounded-md w-full"
						type="password"
						placeholder="Password"
					/>
					<button
						className="p-4 md:py-3 bg-black text-xs tracking-wide rounded-md text-white shadow-lg w-full"
						onClick={() => signIn("google")}
					>
						Login with Email
					</button>
				</div>
				<div>OR</div>
				<div className="flex flex-col gap-4 w-full">
					<button
						className="p-4 md:py-3 bg-black text-xs tracking-wide rounded-md text-white shadow-lg w-full"
						onClick={() => signIn("google")}
					>
						Login with google
					</button>
					<button
						className="p-4 md:py-3 bg-black text-xs tracking-wide rounded-md text-white shadow-lg w-full"
						onClick={() => signIn("google")}
					>
						Login with Github
					</button>
				</div>
			</div>
		</div>
	);
}
