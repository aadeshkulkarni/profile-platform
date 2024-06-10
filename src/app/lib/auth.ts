import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "email", type: "text", placeholder: "" },
				password: { label: "password", type: "password", placeholder: "" },
			},
			async authorize(credentials: any) {
				console.log(credentials);
				return {
					id: "user1",
					email: "aadeshkulkarni@gmail.com",
					password: "test@1234",
				};
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || "",
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		jwt: ({ token, user }: { token: any; user: any }) => {
			console.log(token);
			token.userId = "AK9189";
			return token;
		},
		session: ({ session, token, user }: any) => {
			if (session && session.user) {
				session.user.id = token.userId;
			}
			return session;
		},
		signIn: ({ user }: { user: any }) => {
			if (user.email == "randomperson@gmail.com") {
				return false;
			}
			return true;
		},
	},
	pages: {
		signIn: "/signin"
	}
};
