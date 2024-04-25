import { Alert, Button, Divider, Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

const ReviewProduct = ({ product }) => {
	return (
		<>
			<ProductDetails product={product} />
			<Divider sx={{ mb: "18px" }} />
			<RateProduct />
		</>
	);
};

const RateProduct = () => {
	const [completed, setCompleted] = useState(false);
	const [stars, setStars] = useState(0);
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(stars, name, comment);
		setCompleted(true);
	};

	return (
		<div className="rateProduct">
			<Typography variant="h5" component="h2" mb={2.3} sx={{ fontWeight: "bold" }}>
				Rate this product
			</Typography>

			{!completed ? (
				<form action="" onSubmit={handleSubmit}>
					<Rating
						name="half-rating"
						precision={0.5}
						value={stars}
						size="large"
						aria-required="true"
						onChange={(e, value) => {
							setStars(value);
						}}
						sx={{ fontSize: "60px", mb: "18px" }}
					/>

					<div>
						<TextField
							fullWidth
							sx={{ mb: "22px" }}
							id="standard-basic"
							label="Name"
							required
							aria-required="true"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<TextField
							fullWidth
							id="standard-basic"
							label="Comment"
							required
							aria-required="true"
							value={comment}
							onChange={(e) => {
								setComment(e.target.value);
							}}
						/>
					</div>

					<div className="form_actions" style={{ padding: "24px 0" }}>
						<Button size="large" variant="outlined">
							Cancel
						</Button>
						<Button size="large" variant="contained" type="submit">
							Submit
						</Button>
					</div>
				</form>
			) : (
				<Alert severity="success">Thank you for your review. It will be published after approval.</Alert>
			)}
		</div>
	);
};

export default ReviewProduct;
