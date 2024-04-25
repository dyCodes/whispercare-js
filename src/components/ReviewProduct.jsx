import { Divider } from "@mui/material";
import React from "react";

const ReviewProduct = ({ productData }) => {
	return (
		<>
			<h3>{productData.name} </h3>
			<p>{productData.size}</p>

			<Divider variant="middle" />

			<div className="rateProduct">
				<h3>Rate this product</h3>
			</div>
		</>
	);
};

export default ReviewProduct;
