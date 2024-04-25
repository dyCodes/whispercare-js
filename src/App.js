import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./main.css";
import Home from "./pages/Home";

function App() {
	const theme = createTheme({
		palette: {
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

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Home />
		</ThemeProvider>
	);
}

export default App;
