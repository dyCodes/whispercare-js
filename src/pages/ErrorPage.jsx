import { Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";

const ErrorPage = () => {
	return (
		<Layout page="Error">
			<Typography variant="h2" component="h1" mt={8} align="center" sx={{ fontWeight: "bold" }}>
				Error Page
			</Typography>
		</Layout>
	);
};

export default ErrorPage;
