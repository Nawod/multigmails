/**
 * @author Nawod Madhuwantha
 * @description Gmail Alias Generator
 * @version 1.0.0
 * @since 2025-06-17
 * @description This is a Gmail Alias Generator tool that allows you to create unlimited Gmail aliases for free.
 * @description This tool is built with Next.js, Tailwind CSS, and TypeScript.
 * @description This tool is hosted on Vercel.
 * @description This tool is free to use.
 */
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://gmail-alias-generator.vercel.app"),
	title: {
		default: "Gmail Alias Generator - Create Unlimited Gmail Aliases",
		template: "%s | Gmail Alias Generator",
	},
	description:
		"Create unlimited Gmail aliases using your existing account. Generate dot variations and plus aliases for better email organization and privacy. Free, fast, and secure.",
	keywords: [
		"Gmail alias generator",
		"email alias creator",
		"Gmail dot trick",
		"Multiple Gmail accounts",
		"temporary email generator",
		"disposable email",
		"Free Emails",
		"Gmail variations",
		"email organization",
		"temp emails",
	],
	authors: [{ name: "Nawod Madhuwantha" }],
	creator: "Nawod Madhuwantha",
	publisher: "Nawod Madhuwantha",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://gmail-alias-generator.vercel.app",
		title: "Gmail Alias Generator - Create Unlimited Gmail Aliases",
		description:
			"Create unlimited Gmail aliases using your existing account. Generate dot variations and plus aliases for better email organization and privacy.",
		siteName: "Gmail Alias Generator",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Gmail Alias Generator - Create Unlimited Gmail Aliases",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Gmail Alias Generator - Create Unlimited Gmail Aliases",
		description:
			"Create unlimited Gmail aliases using your existing account. Generate dot variations and plus aliases for better email organization and privacy.",
		images: ["/og-image.png"],
		creator: "@nawodmadhuwantha",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-site-verification",
	},
	other: {
		"google-adsense-account": "ca-pub-2660491671296139",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<meta
					name="google-adsense-account"
					content="ca-pub-2660491671296139"
				/>
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2660491671296139"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
