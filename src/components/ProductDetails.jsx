import React from "react";
import { Grid, Paper, Rating, Typography } from "@mui/material";

const ProductDetails = ({ product }) => {
	return (
		<Grid container spacing={2} className="product_details">
			<Grid item xs={4} className="image_div">
				<img src={product.img} alt={product.name} />
			</Grid>

			<Grid item xs={8}>
				<Typography variant="h6" component="h2" mb={1.5}>
					{product.name}
				</Typography>

				<p>
					<b>Brand: </b> {product.brand}
				</p>

				<p>
					<b>Color: </b> {product.color}
				</p>

				<p className="_mb0">
					<b>Size: </b> {product.size}
				</p>
			</Grid>

			<Grid item xs={12} className="_pt0">
				<Paper elevation={0} className="rating">
					<Typography component="p" sx={{ fontWeight: 500 }}>
						Rating overview <span className="review_count">({product.review_count})</span>
					</Typography>

					<div className="_flex">
						<Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly />
						<span className="score">{product.rating} out 5</span>
					</div>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default ProductDetails;
