import "./main.css";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Settings from "./pages/Settings";

function App() {
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
		{
			path: "settings",
			element: <Settings />,
		},
	]);

	return (
		<>
			<CssBaseline />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
