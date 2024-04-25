import { Box, CircularProgress, Container, Divider } from "@mui/material";
import React, { useState } from "react";
import Layout from "../components/Layout";
import FormVerifyOTP from "../components/FormVerifyOTP";
import ReviewProduct from "../components/ReviewProduct";

const Review = () => {
	const [loading, setLoading] = useState(false);
	const [productData, setProductData] = useState(null);

	return (
		<Layout page="Review">
			<Container maxWidth="sm" className="container">
				<FormVerifyOTP setLoading={setLoading} setProductData={setProductData} />

				<Divider variant="middle" />
				{loading && <Loader />}
				{productData && !loading && <ReviewProduct productData={productData} />}
			</Container>
		</Layout>
	);
};

const Loader = () => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", padding: "50px 0" }}>
			<CircularProgress size={58} />
		</Box>
	);
};

export default Review;
