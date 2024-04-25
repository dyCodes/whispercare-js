import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Divider, IconButton, Rating, TextField, Typography } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import { AppContext } from "../context/AppContext";
import ProductDetails from "./ProductDetails";

const ReviewProduct = ({ product }) => {
	const { speak, HandleSpeakEvents } = useContext(AppContext);

	useEffect(() => {
		speak(`Verification Successful. Product: ${product.name} by ${product.brand}. Rate this product below.`);
	}, [speak, product]);

	return (
		<>
			<ProductDetails product={product} />
			<Divider sx={{ mb: "18px" }} />
			<RateProduct speak={speak} HandleSpeakEvents={HandleSpeakEvents} />
		</>
	);
};

const RateProduct = ({ speak, HandleSpeakEvents }) => {
	const [completed, setCompleted] = useState(false);
	const [stars, setStars] = useState(0);
	const [name, setName] = useState("");
	// const [comment, setComment] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setCompleted(true);
		speak("Thank you for your review. It will be published after approval.");
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
							speak("rating input, value: " + value);
						}}
						sx={{ fontSize: "60px", mb: "18px" }}
					/>

					<div>
						<TextField
							fullWidth
							sx={{ mb: "25px" }}
							id="standard-basic"
							label="Name"
							required
							aria-required="true"
							value={name}
							{...HandleSpeakEvents("Input: name, required")}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>

						<AudioRecorder HandleSpeakEvents={HandleSpeakEvents} />

						{/* <TextField
							fullWidth
							id="standard-basic"
							label="Comment"
							required
							aria-required="true"
							value={comment}
							{...HandleSpeakEvents("Input: comment, required")}
							onChange={(e) => {
								setComment(e.target.value);
							}}
						/> */}
					</div>

					<div className="form_actions" style={{ padding: "24px 0" }}>
						<Button size="large" variant="outlined" {...HandleSpeakEvents("Button: Cancel")}>
							Cancel
						</Button>
						<Button size="large" variant="contained" {...HandleSpeakEvents("Button: Submit")} type="submit">
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

const AudioRecorder = ({ HandleSpeakEvents }) => {
	const [recording, setRecording] = useState(false);
	const audioSrc = "";

	return (
		<div className="audio_record">
			<IconButton
				className="record_icon"
				aria-label="Record audio"
				{...HandleSpeakEvents(recording ? "Stop recording" : "Start recording")}
				onClick={() => setRecording(!recording)}>
				{recording ? <StopIcon /> : <MicIcon />}
			</IconButton>

			<div className="audio_div">
				<audio src={audioSrc} controls style={{ width: "100%" }}></audio>
			</div>
		</div>
	);
};

export default ReviewProduct;
