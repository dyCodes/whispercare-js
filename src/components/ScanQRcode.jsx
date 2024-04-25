import React, { useContext, useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Box, Button, CircularProgress, Dialog, Typography } from "@mui/material";
import { AppContext } from "../context/AppContext";
import ScanQRcodeResult from "./ScanQRcodeResult";

const qrcodeRegionId = "html5qr-code-full-region";

const ScanQRcode = ({ setOpenModal, openModal }) => {
	const { speak } = useContext(AppContext);
	const [scanner, setScanner] = useState(null);
	const [data, setData] = useState({ error: false, loading: true });

	const handleModalClose = () => {
		stopScanning(true);
	};

	const handleError = (err) => {
		console.log("Error: ", err);
	};

	const onScanSuccess = (decodedText, decodedResult) => {
		setData({ decodedText: decodedText, loading: false });
		stopScanning(false);
	};

	const stopScanning = (closeModal) => {
		closeModal && setOpenModal(false);
		speak("Scanning cancelled");

		if (scanner) {
			scanner
				.stop()
				.then((ignore) => {
					console.log("Stopped scanning");
				})
				.catch((err) => handleError(err));
		}
	};

	useEffect(() => {
		// This method will trigger user permissions
		Html5Qrcode.getCameras()
			.then((devices) => {
				if (devices && devices.length) {
					setScanner(new Html5Qrcode(qrcodeRegionId));
					speak("Scanning... Button: Cancel Scan");
				}
			})
			.catch((err) => {
				handleError(err);
				setData({ error: err, loading: false });
				speak("Scanning failed: Camera Permission required.");
			});
	}, [speak]);

	return (
		<Dialog fullWidth onClose={handleModalClose} open={openModal}>
			<div style={{ padding: "26px 12px" }}>
				{data.loading && (
					<>
						<Html5QrcodePlugin scanner={scanner} onScanSuccess={onScanSuccess} />
						<Box sx={{ display: "flex", justifyContent: "center", mt: "24px", mb: "10px" }}>
							<CircularProgress />
						</Box>
					</>
				)}

				<div className="center_content">
					{data.error && (
						<Typography align="center" component="h6" color={"error"} sx={{ fontWeight: "bold" }}>
							Error: Camera Permission Required
						</Typography>
					)}

					{data.decodedText && <ScanQRcodeResult data={data} speak={speak} />}

					<Button
						variant="contained"
						sx={{ mt: "18px", mx: "auto" }}
						size="large"
						onClick={() => stopScanning(true)}>
						Cancel Scan
					</Button>
				</div>
			</div>
		</Dialog>
	);
};

const Html5QrcodePlugin = ({ scanner, onScanSuccess }) => {
	useEffect(() => {
		if (scanner) {
			const config = { fps: 10, qrbox: { width: 250, height: 460 } };
			scanner.start({ facingMode: "environment" }, config, onScanSuccess);
		}
	}, [scanner, onScanSuccess]);

	return <div id={qrcodeRegionId} />;
};

export default ScanQRcode;
