"use client";

import { useEffect, useRef } from "react";

type MiddleSquareAdProps = {
	adSlot: string;
};

export default function MiddleSquareAd({ adSlot }: MiddleSquareAdProps) {
	const adRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!adRef.current) return;

		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (err) {
			console.error("Error loading middle square ad:", err);
		}
	}, []);

	return (
		<div
			className="flex justify-center mb-8"
			ref={adRef}
		>
			<ins
				className="adsbygoogle"
				style={{
					display: "block",
					minWidth: "320px",
					width: "100%",
					maxWidth: "300px",
					minHeight: "250px",
					background: "transparent",
				}}
				data-ad-client="ca-pub-2660491671296139"
				data-ad-slot={adSlot}
				data-ad-format="auto"
				data-full-width-responsive="true"
			/>
		</div>
	);
}
