import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
	const [themeMode, setThemeMode] = useState(localStorage.getItem("themeMode") || "light");

	const theme = createTheme({
		palette: {
			mode: themeMode,
			primary: {
				main: "#9747ff",
			},
			secondary: {
				main: "#c46fc6",
			},
		},
		typography: {
			fontFamily: "Poppins, sans-serif",
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `
					@font-face {
						font-family: 'Poppins, sans-serif';
						font-style: normal;
						font-display: swap;
						font-weight: 400;
					}
				`,
			},
		},
	});

	const toggleThemeMode = () => {
		const newThemeMode = themeMode === "light" ? "dark" : "light";
		setThemeMode(newThemeMode);
		localStorage.setItem("themeMode", newThemeMode);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleThemeMode }}>
			<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};
