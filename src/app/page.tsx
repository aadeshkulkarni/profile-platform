/* eslint-disable @next/next/no-img-element */
"use client";
import Appbar from "@/components/Appbar";
import { DefaultSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const session = useSession();
	if(session.status!=="authenticated") {
		router.push("/signin");
	}
	return (
		<main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-emerald-400 to-cyan-400">
			<Appbar />
			<Profile user={session?.data?.user} />
		</main>
	);
}

const Profile = ({ user }: { user: DefaultSession["user"] }) => {
	console.log("User: ", user);
	return (
		<div className="p-4 flex justify-center items-center">
			<div className="w-full  md:shadow-md md:p-12 py-16 md:bg-black md:bg-opacity-10 flex justifyp-center items-center gap-4 flex-col">
				<Image
					src={user?.image || ""}
					alt={user?.email || ""}
					width="96"
					height="96"
					className="rounded-full border border-emerald-500 p-2"
				/>
				<div>
					<h1 className="text-4xl font-bold text-center">{user?.name}</h1>
					{/* <h1 className="text-md text-center">{user?.email}</h1> */}
					<h1 className="text-md text-center">Travel | Technology</h1>
					<div className="flex flex-col md:flex-row gap-4 justify-between items-center p-4 w-full">
						<button className="bg-black p-4 text-white w-full md:w-1/2 rounded-md">Link button 1</button>
						<button className="bg-black p-4 text-white w-full md:w-1/2 rounded-md">Link button 2</button>
					</div>
					<div className="flex justify-center items-center gap-8 py-8">
						<div className="w-16 h-16 rounded-full bg-black bg-opacity-30"></div>
						<div className="w-16 h-16 rounded-full bg-black bg-opacity-30"></div>
						<div className="w-16 h-16 rounded-full bg-black bg-opacity-30"></div>
						<div className="w-16 h-16 rounded-full bg-black bg-opacity-30"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
