import { Box, CircularProgress, Container, Divider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import FormVerifyOTP from "../components/FormVerifyOTP";
import ReviewProduct from "../components/ReviewProduct";
import { AppContext } from "../context/AppContext";

const Review = () => {
	const { speak, HandleSpeakEvents } = useContext(AppContext);
	const [loading, setLoading] = useState(false);
	const [productData, setProductData] = useState(null);

	useEffect(() => {
		speak("Review", true);

		// IOS Fix: Add inputMode="numeric" to all OTP fields
		const inputFields = Array.from(document.querySelectorAll(".OTPfield input"));
		inputFields.forEach((input) => {
			input.setAttribute("inputMode", "numeric");
		});
	}, [speak]);

	return (
		<Layout page="Review">
			<Container maxWidth="sm" className="container">
				<FormVerifyOTP
					setLoading={setLoading}
					setProductData={setProductData}
					speak={speak}
					HandleSpeakEvents={HandleSpeakEvents}
				/>

				<Divider sx={{ mb: "18px" }} />

				{loading && <Loader />}
				{productData && !loading && <ReviewProduct product={productData} />}
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
