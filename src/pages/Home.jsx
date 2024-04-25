import React, { useContext, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, Container, Link, Typography } from "@mui/material";
import Layout from "../components/Layout";
import RecentQRScans from "../components/RecentQRScans";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ScanQRcode from "../components/ScanQRcode";
import { AppContext } from "../context/AppContext";

const Home = () => {
	const { speak, HandleSpeakEvents, recentScans } = useContext(AppContext);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		speak("Home", true);
	}, [speak]);

	// Page TTS contents
	const ttsContent = {
		scan_qrcode: "Click to scan QR code to get more information",
		start_review: "Record an audio review of purchased products. Link: Start now",
	};

	return (
		<Layout page="Home">
			<Container maxWidth="sm" className="container">
				<div className="header_card">
					<Button
						className="scan_qrcode"
						onClick={() => setOpenModal(true)}
						// If it is a mobile device, then use onTouchStart instead of onMouseDown
						{...HandleSpeakEvents(ttsContent.scan_qrcode)}
						//
					>
						<Card className="card">
							<QrCode2Icon className="scan_icon" sx={{ fontSize: "92px" }} />
							<Typography component="p" align="center" sx={{ fontWeight: 500 }}>
								Scan QR code to get more information
							</Typography>
						</Card>
					</Button>
				</div>

				{openModal && <ScanQRcode setOpenModal={setOpenModal} openModal={openModal} />}

				<Card className="start_review_card" {...HandleSpeakEvents(ttsContent.start_review)}>
					<Typography variant="h6" mb={2.5} className="heading">
						Record an audio review of purchased products.
					</Typography>

					<Link component={RouterLink} to="/review" underline="hover" className="review_button">
						Start now
						<ArrowForwardIcon className="icon" />
					</Link>
				</Card>

				<div className="_flex_space_btw _mb2">
					<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
						Recent QR code scans
					</Typography>
					<Link component={RouterLink} to={"/scan-history"} underline="hover" fontWeight="bold">
						View All
					</Link>
				</div>

				<RecentQRScans recentScans={recentScans.slice(0, 4)} />
			</Container>
		</Layout>
	);
};

export default Home;
