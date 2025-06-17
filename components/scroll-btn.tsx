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
import React from "react";
import { Button } from "./ui/button";

const ScrollBtn = () => {
	return (
		<Button
			onClick={() => {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			}}
			className="h-12 text-lg bg-red-600 hover:bg-red-700 mx-auto block animate-pulse"
			size="lg"
		>
			Generate Gmail Aliases
		</Button>
	);
};

export default ScrollBtn;
