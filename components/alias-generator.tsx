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
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";

// Constants
const ALIAS_COUNT_OPTIONS = [
	{ label: "10", value: 10 },
	{ label: "50", value: 50 },
	{ label: "100", value: 100 },
	{ label: "1000", value: 1000 },
	{ label: "1000+", value: "unlimited" },
] as const;

const PLUS_SUFFIXES = [
	"work",
	"personal",
	"shopping",
	"newsletter",
	"social",
	"backup",
	"test",
	"temp",
	"main",
	"primary",
	"secondary",
	"business",
	"mail",
	"contact",
	"info",
	"support",
	"help",
	"service",
	"admin",
	"user",
	"account",
	"signup",
	"login",
	"register",
	"news",
	"blog",
	"media",
	"social",
	"network",
	"community",
	"shop",
	"store",
	"market",
	"sale",
	"deals",
	"offers",
	"job",
	"career",
	"work",
	"business",
	"company",
	"corporate",
	"school",
	"college",
	"university",
	"education",
	"study",
	"learn",
	"health",
	"fitness",
	"wellness",
	"medical",
	"doctor",
	"clinic",
	"tech",
	"digital",
	"online",
	"web",
	"internet",
	"cloud",
	"home",
	"family",
	"life",
	"lifestyle",
	"living",
	"house",
] as const;

const ADDITIONAL_SUFFIXES = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"x",
	"y",
	"z",
	"alpha",
	"beta",
	"gamma",
	"delta",
	"2023",
	"2024",
	"2025",
	"2026",
	"2027",
	"2028",
	"jan",
	"feb",
	"mar",
	"apr",
	"may",
	"jun",
	"jul",
	"aug",
	"sep",
	"oct",
	"nov",
	"dec",
] as const;

// Types
type AliasCount = (typeof ALIAS_COUNT_OPTIONS)[number]["value"];

// Utility Functions
const generateDotVariations = (str: string): string[] => {
	const variations: string[] = [];
	const len = str.length;

	// Generate all possible dot combinations
	for (let i = 1; i < len; i++) {
		const withDot = str.slice(0, i) + "." + str.slice(i);
		variations.push(withDot);

		// Add more complex dot patterns
		if (i < len - 2) {
			const doubleDot =
				str.slice(0, i) + "." + str.slice(i, i + 2) + "." + str.slice(i + 2);
			if (doubleDot.length <= str.length + 3) {
				variations.push(doubleDot);
			}
		}
	}

	// Add triple dot variations for longer usernames
	if (len > 4) {
		for (let i = 1; i < len - 3; i++) {
			for (let j = i + 2; j < len - 1; j++) {
				const tripleDot =
					str.slice(0, i) +
					"." +
					str.slice(i, j) +
					"." +
					str.slice(j, j + 2) +
					"." +
					str.slice(j + 2);
				if (tripleDot.length <= str.length + 4) {
					variations.push(tripleDot);
				}
			}
		}
	}

	return variations;
};

const generateMoreVariations = (
	aliasSet: Set<string>,
	username: string,
	domain: string,
	dotVariations: string[],
	plusSuffixes: readonly string[],
	targetCount: number
): void => {
	let currentCount = aliasSet.size;
	let dotIndex = 0;
	let suffixIndex = 0;

	// Add more dot variations with plus suffixes
	while (currentCount < targetCount && dotIndex < dotVariations.length) {
		while (suffixIndex < plusSuffixes.length && currentCount < targetCount) {
			const dotVar = dotVariations[dotIndex];
			const suffix = plusSuffixes[suffixIndex];
			aliasSet.add(dotVar + "+" + suffix + domain);
			currentCount = aliasSet.size;
			suffixIndex++;
		}
		suffixIndex = 0;
		dotIndex++;
	}

	// If still need more variations, add more plus suffixes
	if (currentCount < targetCount) {
		for (const suffix of ADDITIONAL_SUFFIXES) {
			if (currentCount >= targetCount) break;
			aliasSet.add(username + "+" + suffix + domain);
			currentCount = aliasSet.size;
		}
	}
};

// Main Component
const AliasGenerator = () => {
	const [email, setEmail] = useState("");
	const [aliases, setAliases] = useState<string[]>([]);
	const { toast } = useToast();
	const [aliasCount, setAliasCount] = useState<AliasCount>(
		ALIAS_COUNT_OPTIONS[0].value
	);

	const generateAliases = () => {
		if (!email || !email.includes("@gmail.com")) {
			toast({
				title: "Invalid Email",
				description: "Please enter a valid Gmail address",
				variant: "destructive",
			});
			return;
		}

		const username = email.split("@")[0];
		const domain = "@gmail.com";
		const aliasSet = new Set<string>();

		// Add original email
		aliasSet.add(email);

		// Generate and add dot variations
		const dotVariations = generateDotVariations(username);
		dotVariations.forEach((variation) => {
			aliasSet.add(variation + domain);
		});

		// Add initial plus variations
		PLUS_SUFFIXES.forEach((suffix) => {
			aliasSet.add(username + "+" + suffix + domain);
		});

		// Generate variations based on selected count
		if (aliasCount === "unlimited") {
			// Generate all possible combinations for unlimited mode
			dotVariations.forEach((dotVar) => {
				PLUS_SUFFIXES.forEach((suffix) => {
					aliasSet.add(dotVar + "+" + suffix + domain);
				});
			});
		} else {
			const targetCount = Number(aliasCount);
			// Initial generation with more combinations
			const dotVariationsToUse = dotVariations.slice(
				0,
				Math.min(12, dotVariations.length)
			);
			const plusSuffixesToUse = PLUS_SUFFIXES.slice(
				0,
				Math.min(25, PLUS_SUFFIXES.length)
			);

			dotVariationsToUse.forEach((dotVar) => {
				plusSuffixesToUse.forEach((suffix) => {
					aliasSet.add(dotVar + "+" + suffix + domain);
				});
			});

			// Generate more variations if needed
			if (aliasSet.size < targetCount) {
				generateMoreVariations(
					aliasSet,
					username,
					domain,
					dotVariations,
					PLUS_SUFFIXES,
					targetCount
				);
			}
		}

		// Convert to array and limit results
		const aliasArray =
			aliasCount === "unlimited"
				? Array.from(aliasSet)
				: Array.from(aliasSet).slice(0, Number(aliasCount));

		setAliases(aliasArray);
	};

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			toast({
				title: "Copied to clipboard!",
				description: text,
			});
		} catch (err) {
			toast({
				title: "Failed to copy",
				description: "Please try again",
				variant: "destructive",
			});
		}
	};

	return (
		<>
			<div className="max-w-md mx-auto mb-12">
				<div className="space-y-4">
					<div className="space-y-2">
						<Label
							htmlFor="email"
							className="text-base font-medium"
						>
							Enter your Gmail address
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="yourname@gmail.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="h-12 text-lg"
							onKeyPress={(e) => e.key === "Enter" && generateAliases()}
						/>
					</div>
					{/**Alias count */}
					<div>
						<p className="mb-2">Select the number of alias</p>
						<div className="flex gap-2">
							{ALIAS_COUNT_OPTIONS.map((option) => (
								<Button
									key={option.value}
									variant={aliasCount === option.value ? "default" : "outline"}
									className={`${
										aliasCount === option.value
											? "bg-red-600 text-white hover:bg-red-600"
											: ""
									}`}
									onClick={() => setAliasCount(option.value)}
								>
									{option.label}
								</Button>
							))}
						</div>
					</div>
					<Button
						onClick={generateAliases}
						className="w-full h-12 text-lg bg-red-600 hover:bg-red-700"
						size="lg"
					>
						Generate Aliases
					</Button>
				</div>
			</div>

			{/* Aliases Grid */}
			{aliases.length > 0 && (
				<Card className="space-y-6 max-h-[500px] overflow-y-auto p-4">
					<div className="flex items-center justify-between">
						<h3 className="text-2xl font-semibold text-center">
							Your Gmail Aliases ({aliases.length})
						</h3>
						<Button
							variant="outline"
							size="sm"
							onClick={() => copyToClipboard(aliases.join("\n"))}
						>
							Copy All
						</Button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{aliases.map((alias, index) => (
							<Card
								key={index}
								className="hover:shadow-md transition-shadow"
							>
								<CardContent className="p-4">
									<div className="flex items-center justify-between gap-2">
										<div className="flex-1 min-w-0">
											<p
												className="text-sm font-mono truncate"
												title={alias}
											>
												{alias}
											</p>
										</div>
										<Button
											variant="outline"
											size="sm"
											onClick={() => copyToClipboard(alias)}
											className="shrink-0"
										>
											<Copy className="h-4 w-4" />
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</Card>
			)}
		</>
	);
};

export default AliasGenerator;
