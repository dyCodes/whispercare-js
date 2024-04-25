import React from "react";
import { Typography } from "@mui/material";
import products from "../assets/products-demo.json";

const ScanQRcodeResult = ({ data, speak }) => {
	const product = products[Math.floor(Math.random() * products.length)];
	// const product = products.find((product) => product.code === data.decodedText);

	if (product) {
		speak(`Product found. Loading`);
		// Redirect to product page
		window.location.href = `/product/${product.code}`;
		return (
			<Typography align="center" variant="h6" my={1}>
				Loading...
			</Typography>
		);
	} else {
		speak(`No product found with this code: ${data.decodedText}`);

		return (
			<div className="result">
				<Typography align="center" variant="h6" mt={1.5} mx={1.4} color={"error"}>
					No product found with this code
				</Typography>

				<Typography align="center" variant="h6" mt={2.5} sx={{ fontSize: "19px", lineBreak: "anywhere" }}>
					<b>Code:</b> {data.decodedText}
				</Typography>
			</div>
		);
	}
};

export default ScanQRcodeResult;
