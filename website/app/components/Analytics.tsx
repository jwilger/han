import Script from "next/script";

export default function Analytics() {
	return (
		<Script
			defer
			data-domain="han.guru"
			src="https://plausible.io/js/script.js"
			strategy="afterInteractive"
		/>
	);
}
