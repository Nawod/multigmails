"use client";
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
import { Button } from "@/components/ui/button";
import { Mail, Moon, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
	const { theme, setTheme } = useTheme();
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between mx-auto">
				<div className="flex items-center space-x-2">
					<Mail className="h-6 w-6 text-red-600" />
					<h1 className="text-xl font-bold text-red-600">
						Gmail Alias Generator
					</h1>
				</div>
				<Button
					variant="ghost"
					size="icon"
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				>
					<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</div>
		</header>
	);
};

export default Header;
