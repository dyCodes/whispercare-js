import "./main.css";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Settings from "./pages/Settings";
import Product from "./pages/Product";
import ScanHistory from "./pages/ScanHistory";
import { AppProvider } from "./context/AppContext";
import LocateProduct from "./pages/LocateProduct";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
		{
			path: "product/:id",
			element: <Product />,
		},
		{
			path: "locate-product",
			element: <LocateProduct />,
		},
		{
			path: "review",
			element: <Review />,
		},
		{
			path: "scan-history",
			element: <ScanHistory />,
		},
		{
			path: "settings",
			element: <Settings />,
		},
	]);

	return (
		<AppProvider>
			<CssBaseline />
			<RouterProvider router={router} />
		</AppProvider>
	);
}

export default App;
