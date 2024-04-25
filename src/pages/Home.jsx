import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, Container, Link, Typography } from "@mui/material";
import Layout from "../components/Layout";
import RecentQRScans from "../components/RecentQRScans";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QRcode from "../assets/img/qrcode.svg";
import ScanQRcode from "../components/ScanQRcode";

const Home = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<Layout page="Home">
			<Container maxWidth="sm" className="container">
				<div className="header_card">
					<Button className="scan_qrcode" onClick={() => setOpenModal(true)}>
						<Card className="card">
							<img src={QRcode} style={{ display: "block" }} alt="Scan QRcode" />
							<Typography component="p" align="center" sx={{ fontWeight: 500 }}>
								Scan QR code to get more information
							</Typography>
						</Card>
					</Button>
				</div>

				{openModal && <ScanQRcode setOpenModal={setOpenModal} openModal={openModal} />}

				<Card className="start_review_card">
					<Typography variant="h6" mb={2.5} className="heading">
						Record an audio review of purchased products.
					</Typography>

					<Link component={RouterLink} to="/review" underline="hover" className="review_button">
						Start now
						<ArrowForwardIcon className="icon" />
					</Link>
				</Card>

				<Typography variant="h6" component="h2" mb={2.5} sx={{ fontWeight: "bold" }}>
					Recent QR code scans
				</Typography>

				<RecentQRScans />
			</Container>
		</Layout>
	);
};

export default Home;
