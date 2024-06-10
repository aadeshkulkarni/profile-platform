"use client"
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import React from "react";
import { NEXT_AUTH } from "../lib/auth";
import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default async function () {
  //const session = await getServerSession(NEXT_AUTH);
  const session = useSession();
  console.log(session);
  const router = useRouter();
  
  console.log("Session: ", session);
  if (session.status !== "authenticated") {
    router.push("/signin");
  }
  return (
    <div>
      <Appbar />
      <Profile user={session?.data?.user} />
    </div>
  );
}
