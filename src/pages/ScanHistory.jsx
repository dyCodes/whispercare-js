import React, { useContext, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Layout from "../components/Layout";
import RecentQRScans from "../components/RecentQRScans";
import { AppContext } from "../context/AppContext";

const ScanHistory = () => {
	const { speak } = useContext(AppContext);
	const { recentScans } = useContext(AppContext);

	useEffect(() => {
		speak("ScanHistory", true);
		window.scrollTo(0, 0);
	}, [speak]);

	return (
		<Layout page="ScanHistory">
			<Container maxWidth="sm" className="container">
				<Typography variant="h6" component="h2" mb={2.5} sx={{ fontWeight: "bold" }}>
					Recent QR code scans
				</Typography>

				<RecentQRScans recentScans={recentScans} />
			</Container>
		</Layout>
	);
};

export default ScanHistory;
