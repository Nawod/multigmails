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
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import AliasGenerator from "@/components/alias-generator";
import Header from "@/components/header";
import ScrollBtn from "@/components/scroll-btn";

export default function GmailAliasGenerator() {
	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<Header />

			{/* Ad Banner */}
			<div className="w-full bg-muted/30 border-b px-6 sm:px-0">
				<div className="container py-4 mx-auto">
					<div className="flex justify-center">
						<div className="w-[728px] h-[90px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
							Advertisement Space (728x90)
						</div>
					</div>
				</div>
			</div>

			<div className="container py-8 mx-auto px-6 sm:px-0">
				<div className="flex gap-8">
					{/* Main Content */}
					<div className="flex-1">
						{/* Hero Section */}
						<div className="text-center mb-12">
							<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
								Generate Gmail Aliases That Still Land in Your Inbox
							</h2>
							<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
								Create unlimited email variations using Gmail's dot trick and
								plus aliasing. Perfect for organizing subscriptions, testing,
								and maintaining privacy while keeping everything in one inbox.
							</p>
						</div>

						{/* Input Section */}
						<AliasGenerator />

						{/* Why choose Gmail Aliases */}
						<div className="mt-16 max-w-3xl mx-auto">
							<h3 className="text-2xl font-semibold mb-6 text-center">
								Why choose Gmail Aliases?
							</h3>
							<Card>
								<CardContent className="p-6">
									<p className="text-muted-foreground text-justify">
										Gmail aliases are a powerful feature that allows you to
										create multiple email addresses that all deliver to your
										main Gmail inbox. Using Gmail's dot trick and plus
										addressing, you can generate unlimited email variations
										without creating separate accounts. This is perfect for
										organizing subscriptions, filtering spam, testing
										applications, and maintaining privacy while keeping
										everything centralized in one inbox.
										<strong>Key Benefits:</strong>
										<ul className="list-disc list-inside space-y-1 mt-2 ml-4">
											<li>
												<strong>Email Organization:</strong> Keep different
												types of emails separate and organized
											</li>
											<li>
												<strong>Spam Filtering:</strong> Easily identify and
												filter unwanted emails
											</li>
											<li>
												<strong>Privacy Protection:</strong> Protect your main
												email address from being shared
											</li>
											<li>
												<strong>Easy Testing:</strong> Test applications and
												services without cluttering your main inbox
											</li>
											<li>
												<strong>Subscription Management:</strong> Track and
												manage different subscriptions effectively
											</li>
										</ul>
										Whether you're a developer testing email functionality, a
										business owner organizing customer communications, or
										someone looking to protect their privacy online, Gmail
										aliases provide a simple yet effective solution for managing
										multiple email identities without the hassle of multiple
										accounts.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>

					{/* Sidebar Ad */}
					<div className="hidden lg:block w-[300px] shrink-0">
						<div className="sticky top-24">
							<div className="w-[300px] h-[600px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
								<div className="text-center">
									<p>Advertisement</p>
									<p>Space</p>
									<p>(300x600)</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* SEO Content Section */}
				<div className="mt-16 max-w-4xl mx-auto px-6 sm:px-0">
					{/* Main SEO Content */}
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight mb-4">
							📧 Fast & Secure Gmail Alias Generator
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							Create unlimited Gmail aliases using your existing account—and
							still receive everything in your main inbox. No sign-ups. No extra
							inbox. Just reliable, trackable email variants for every purpose.
						</p>
					</div>

					{/* How It Works */}
					<Card className="mb-8">
						<CardContent className="p-6">
							<h3 className="text-xl font-semibold mb-4">✅ How It Works</h3>
							<div className="space-y-3 text-muted-foreground">
								<p>
									<strong>Gmail dot trick & plus aliases:</strong> Transform
									yourname@gmail.com into your.name@gmail.com or
									yourname+shopping@gmail.com.
								</p>
								<p>
									<strong>Instant & disposable:</strong> Generate bespoke email
									aliases for registrations, newsletters, or testing—without
									creating new accounts.
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Why Users Search */}
					<Card className="mb-8">
						<CardContent className="p-6">
							<h3 className="text-xl font-semibold mb-4">
								🔍 Why Users Search for This Tool
							</h3>
							<p className="text-muted-foreground mb-4">
								We built our temporary email generator and email alias generator
								after identifying key user interests:
							</p>
							<ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
								<li>Protect against spam and data leakage</li>
								<li>Simplify inbox organization</li>
								<li>Easily manage disposable, site-specific emails</li>
							</ul>
							<div>
								<p className="font-medium mb-2">
									Related search terms we target:
								</p>
								<div className="flex flex-wrap gap-2">
									{[
										"temporary email generator",
										"disposable email",
										"Gmail alias generator",
										"email alias creator",
										"plus alias Gmail",
										"Gmail dot alias tool",
									].map((term, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
										>
											{term}
										</span>
									))}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Benefits Comparison */}
					<Card className="mb-8">
						<CardContent className="p-6">
							<h3 className="text-xl font-semibold mb-4">
								🛠️ Benefits Compared to Other Methods
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b">
											<th className="text-left p-3 font-medium">Feature</th>
											<th className="text-left p-3 font-medium">Our Tool</th>
											<th className="text-left p-3 font-medium">
												Traditional Temp Email 🚫
											</th>
										</tr>
									</thead>
									<tbody className="text-sm">
										<tr className="border-b">
											<td className="p-3">Uses your real Gmail</td>
											<td className="p-3 text-green-600">
												✅ No separate inbox needed
											</td>
											<td className="p-3 text-red-600">
												❌ Creates a new unknown inbox
											</td>
										</tr>
										<tr className="border-b">
											<td className="p-3">Instant alias generation</td>
											<td className="p-3 text-green-600">
												✅ No registration required
											</td>
											<td className="p-3 text-red-600">
												❌ Often needs sign-up
											</td>
										</tr>
										<tr className="border-b">
											<td className="p-3">Inbox forwarding intact</td>
											<td className="p-3 text-green-600">
												✅ All in your own Gmail
											</td>
											<td className="p-3 text-red-600">
												❌ Risk of mismanaged inbox
											</td>
										</tr>
										<tr>
											<td className="p-3">SEO-targeted keywords</td>
											<td className="p-3 text-green-600">
												✅ Ranks for "email alias generator" etc.
											</td>
											<td className="p-3 text-red-600">❌ Doesn't apply</td>
										</tr>
									</tbody>
								</table>
							</div>
						</CardContent>
					</Card>

					{/* Use Cases */}
					<Card className="mb-8">
						<CardContent className="p-6">
							<h3 className="text-xl font-semibold mb-4">🎯 Use Cases</h3>
							<div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
								<div>
									<h4 className="font-medium mb-2">Spam-free signups</h4>
									<p className="text-sm">
										Use yourname+offer@gmail.com for deals, and filter or block
										easily.
									</p>
								</div>
								<div>
									<h4 className="font-medium mb-2">Newsletter organization</h4>
									<p className="text-sm">
										Create yourname+news@gmail.com, +blog@gmail.com for clearer
										inbox structure.
									</p>
								</div>
								<div>
									<h4 className="font-medium mb-2">Testing & QA</h4>
									<p className="text-sm">
										Perfect for developers needing multiple test accounts.
									</p>
								</div>
								<div>
									<h4 className="font-medium mb-2">Privacy-focused browsing</h4>
									<p className="text-sm">
										Stay anonymous without third-party disposable email services
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Start Generating */}
					<Card className="mb-8">
						<CardContent className="p-6">
							<h3 className="text-xl font-semibold mb-4">
								🚀 Start Generating Your Gmail Aliases Instantly
							</h3>
							<ol className="list-decimal list-inside space-y-2 text-muted-foreground">
								<li>Enter your Gmail address.</li>
								<li>View a curated list of dot and + aliases—ready to copy.</li>
								<li>
									Use them for signups, verifications, tests, or campaigns.
								</li>
								<li>
									Sit back—Gmail forwards everything to your original account.
								</li>
							</ol>
							<div className="mt-4">
								<p className="font-medium mb-2">Keywords you'll appreciate:</p>
								<div className="flex flex-wrap gap-2">
									{[
										"Gmail alias generator",
										"temporary email generator",
										"plus alias Gmail",
										"disposable email tool",
										"email alias creator",
									].map((term, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
										>
											{term}
										</span>
									))}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Why You Should Use */}
					<Card className="mb-8">
						<CardContent className="p-6">
							<h3 className="text-xl font-semibold mb-4">
								✅ Why You Should Use This Tool
							</h3>
							<ul className="list-disc list-inside space-y-2 text-muted-foreground">
								<li>No new accounts required—works with your existing Gmail</li>
								<li>Boosts privacy, spam control, and inbox organization</li>
								<li>Instant setup—no waiting, no hassle</li>
								<li>
									SEO-optimized so people like you can find us when searching
									for "email alias generator" or "temporary email generator"
								</li>
							</ul>
							<div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
								<p className="text-center font-medium">
									Ready to take control of your inbox? Try our Gmail alias tool
									now and experience the freedom of unlimited disposable email
									addresses with zero clutter.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
				<ScrollBtn />
			</div>

			{/* Footer */}
			<footer className="border-t bg-muted/30 mt-16">
				<div className="container py-8 mx-auto px-6 sm:px-0">
					{/* Footer Ad */}
					<div className="flex justify-center mb-8">
						<div className="w-[728px] h-[90px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
							Advertisement Space (728x90)
						</div>
					</div>

					<div className="text-center text-muted-foreground">
						<p>
							&copy; {new Date().getFullYear()} Gmail Alias Generator. All
							rights reserved |{" "}
							<Link
								href="https://www.nawodmadhuwantha.com/"
								className="hover:text-primary"
								target="_blank"
								rel="noopener noreferrer"
							>
								Nawod Madhuwantha
							</Link>
						</p>
						<p className="text-sm mt-2">
							This tool helps you create Gmail aliases for better email
							organization and privacy.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
