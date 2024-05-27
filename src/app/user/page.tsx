/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import React from "react";
import { NEXT_AUTH } from "../lib/auth";

export default async function () {
	const session = await getServerSession(NEXT_AUTH);
	console.log(session)
	return (
		<div>
			<Appbar />
			User component
			{JSON.stringify(session)}
		</div>
	);
}
