import "./main.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Review from "./pages/Review";

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

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
		{
			path: "review",
			element: <Review />,
		},
	]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
