"use client";

import { useEffect, useRef } from "react";

export default function MiddleAd() {
	const adRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!adRef.current) return;

		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (err) {
			console.error("Error loading middle ad:", err);
		}
	}, []);

	return (
		<div
			className="flex justify-center my-8"
			ref={adRef}
		>
			<ins
				className="adsbygoogle"
				style={{
					display: "block",
					minWidth: "320px",
					width: "100%",
					maxWidth: "728px",
					minHeight: "90px",
					background: "transparent",
				}}
				data-ad-client="ca-pub-2660491671296139"
				data-ad-slot="2070755799"
				data-ad-format="auto"
				data-full-width-responsive="true"
			/>
		</div>
	);
}
