import {
	Button,
	Card,
	CardContent,
	Container,
	Dialog,
	DialogActions,
	DialogTitle,
	Grid,
	Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { AppContext } from "../context/AppContext";
import VoiceAnimation from "../assets/voice-assistant-gif.mp4";
import MapCanvas from "../assets/img/demo-canvas.png";

const LocateProduct = () => {
	const navigate = useNavigate();
	const { speak } = useContext(AppContext);
	const [openModal, setOpenModal] = useState(true);
	const [product, setProduct] = useState(null);
	const storeName = "Victor’s beauty store";

	const handleProceed = () => {
		setOpenModal(false);
		speak("Listening, please say the product name");

		// Simulate product search
		setTimeout(() => {
			const data = {
				id: 16,
				code: "11112222016",
				name: "Matte 3D Foundation",
				distance: "10 meters away",
				direction: "Straight down the first turn on your right",
				location: "Aisle 3, Shelf 2",
				img: "https://i.ebayimg.com/thumbs/images/g/tfwAAOSwBIFjT491/s-l300.webp",
			};
			setProduct(data);
		}, 8000);
	};

	const handleCancel = (e, reason) => {
		navigate("/");
	};

	return (
		<Layout page="LocateProduct">
			{product ? (
				<StoreMap product={product} speak={speak} />
			) : (
				<Container maxWidth="sm" className="container">
					<div className="voice_animation" style={{ visibility: openModal ? "hidden" : "visible" }}>
						<video
							autoPlay={true}
							loop={true}
							playsInline={true}
							muted={true}
							style={{
								width: "100%",
								display: "block",
								margin: "0 auto",
								maxWidth: "340px",
								borderRadius: "28px",
							}}
							src={VoiceAnimation}
							alt="Voice Animation"
						/>
					</div>

					<Typography variant="h6" mt={1.6} align="center" sx={{ fontWeight: "bold" }}>
						Listening, please say the product name
					</Typography>
				</Container>
			)}

			{openModal && (
				<ConfirmModal
					openModal={openModal}
					storeName={storeName}
					handleCancel={handleCancel}
					handleProceed={handleProceed}
					speak={speak}
				/>
			)}
		</Layout>
	);
};

const ConfirmModal = ({ openModal, storeName, handleCancel, handleProceed, speak }) => {
	const ttsContent = `Modal: We have detected that you are currently in ${storeName}, please confirm. Button: No, Go Back, Button: Yes, Proceed`;

	useEffect(() => {
		speak(ttsContent);
	}, [ttsContent, speak]);

	return (
		<Dialog
			open={openModal}
			onClose={handleCancel}
			// disableEscapeKeyDown={true}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			className="confirm_store_modal">
			<DialogTitle
				id="alert-dialog-title"
				onClick={() => speak(ttsContent)}
				sx={{ textAlign: "center", fontSize: "1.12rem" }}>
				We have detected that you are currently in <b>{storeName}</b>, please confirm
			</DialogTitle>

			<DialogActions sx={{ width: "100%", mb: "18px", justifyContent: "center" }}>
				<Button size="large" variant="outlined" onClick={handleCancel}>
					No! Go Back
				</Button>
				<Button size="large" variant="contained" onClick={handleProceed} autoFocus>
					Yes! Proceed
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const StoreMap = ({ product, speak }) => {
	useEffect(() => {
		const tts = `Product: ${product.name}, ${product.distance}. ${product.direction}`;
		speak(tts);
	}, [product, speak]);

	return (
		<div className="store_map">
			<div className="map-canvas">
				<img src={MapCanvas} alt="map-canvas" />
			</div>

			<Card className="card" sx={{ m: "12px" }}>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<Typography variant="h2" mb={1.1} sx={{ fontSize: "16px", fontWeight: "bold" }}>
								{product.name}
							</Typography>

							<p className="_m0">{product.distance}</p>

							<Typography component="p" mt={1.1} sx={{ fontSize: "17px", fontWeight: "500" }}>
								{product.direction}
							</Typography>
						</Grid>

						<Grid item xs={4}>
							<img src={product.img} alt={product.name} />
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
};

export default LocateProduct;
