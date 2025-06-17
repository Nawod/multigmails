"use client";

import { useEffect, useRef } from "react";

export default function SidebarAd() {
	const adRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!adRef.current) return;

		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (err) {
			console.error("Error loading sidebar ad:", err);
		}
	}, []);

	return (
		<div
			className="flex justify-center"
			ref={adRef}
		>
			<ins
				className="adsbygoogle"
				style={{ display: "block", minWidth: "300px", minHeight: "600px" }}
				data-ad-client="ca-pub-2660491671296139"
				data-ad-slot="8508171636"
				data-ad-format="autorelaxed"
			/>
		</div>
	);
}
