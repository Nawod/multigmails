"use client";

import { useEffect, useRef } from "react";

export default function HeaderAd() {
	const adRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!adRef.current) return;

		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (err) {
			console.error("Error loading header ad:", err);
		}
	}, []);

	return (
		<div className="w-full bg-muted/30 border-b px-6 sm:px-0">
			<div className="container py-4 mx-auto">
				<div
					className="flex justify-center"
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
						data-ad-slot="5784152983"
						data-ad-format="auto"
						data-full-width-responsive="true"
					/>
				</div>
			</div>
		</div>
	);
}
