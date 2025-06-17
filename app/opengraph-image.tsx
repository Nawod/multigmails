import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Gmail Alias Generator - Create Unlimited Gmail Aliases";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 128,
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "40px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
					}}
				>
					<h1
						style={{
							fontSize: "64px",
							fontWeight: "bold",
							color: "#EA4335",
							marginBottom: "20px",
						}}
					>
						Gmail Alias Generator
					</h1>
					<p
						style={{
							fontSize: "32px",
							color: "#333",
							marginBottom: "20px",
						}}
					>
						Create Unlimited Gmail Aliases
					</p>
					<p
						style={{
							fontSize: "24px",
							color: "#666",
						}}
					>
						Free, Fast, and Secure
					</p>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
