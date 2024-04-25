import React, { createContext, useState } from "react";
import demoHistory from "../assets/history-demo.json";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const [recentScans, setRecentScans] = useState(demoHistory);

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
