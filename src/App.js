import "./main.css";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Settings from "./pages/Settings";
import Product from "./pages/Product";

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
		{
			path: "product/:id",
			element: <Product />,
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
