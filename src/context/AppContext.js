import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const [recentScans, setRecentScans] = useState([
		{
			id: 1,
			code: "1111222201",
			brand: "MARY KAY",
			name: "Crystal Glide Lipstick",
			img: process.env.PUBLIC_URL + "/assets/mary_kay.png",
		},
		{
			id: 2,
			code: "1111222202",
			brand: "ESTEE LAUDER",
			name: "Bronze Liquid Eyeshadow",
			img: process.env.PUBLIC_URL + "/assets/estee_lauder.png",
		},
		{
			id: 3,
			code: "1111222203",
			brand: "MARY KAY",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/mary_kay.png",
		},
		{
			id: 4,
			code: "1111222204",
			brand: "ESTEE LAUDER",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/estee_lauder.png",
		},
		{
			id: 5,
			code: "1111222205",
			brand: "ESTEE LAUDER",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/estee_lauder.png",
		},
		{
			id: 6,
			code: "1111222206",
			brand: "MARY KAY",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/mary_kay.png",
		},
	]);

	const pageContent = {
		Home: "Home page",
		Review: "Product review page",
		ScanHistory: "Recent QR code scans page",
		Settings: "Settings page",
	};

	const synthesis = window.speechSynthesis;
	const isMobile = window.innerWidth <= 768;

	const HandleSpeakEvents = (text) => {
		return {
			...(isMobile ? { onTouchStart: () => speak(text) } : { onMouseDown: () => speak(text) }),
		};
	};

	const stopTTS = () => {
		window.speechSynthesis.cancel();
	};

	const speak = (text, check) => {
		if ("speechSynthesis" in window) {
			stopTTS();

			if (check && pageContent[text]) {
				text = pageContent[text];
			}

			let speakText = new SpeechSynthesisUtterance(text);
			speakText.lang = "en-US";
			speakText.rate = 1;
			speakText.pitch = 1;
			speakText.volume = 1;

			// speakText.onstart = (e) => {
			// 	console.log("Text: ", text);
			// 	console.log("Speaking...");
			// };

			speakText.onend = (e) => {
				console.log("Done speaking...");
			};

			speakText.onerror = (e) => {
				console.log("Error speaking...");
			};

			synthesis.speak(speakText);
		} else {
			console.log("Text-to-speech not supported.");
		}
	};

	return (
		<AppContext.Provider value={{ speak, HandleSpeakEvents, stopTTS, recentScans, setRecentScans }}>
			{children}
		</AppContext.Provider>
	);
};
