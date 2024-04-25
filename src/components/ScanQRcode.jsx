import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Box, Button, CircularProgress, Dialog, Typography } from "@mui/material";
import products from "../assets/products-demo.json";

const qrcodeRegionId = "html5qr-code-full-region";

const ScanQRcode = ({ setOpenModal, openModal }) => {
	const [scanner, setScanner] = useState(null);
	const [data, setData] = useState({ error: false, loading: true });

	const handleModalClose = () => {
		stopScanning(true);
	};

	const handleError = (err) => {
		console.log("Error: ", err);
	};

	const onScanSuccess = (decodedText, decodedResult) => {
		console.log("DecodedText: ", decodedResult);
		setData({ decodedText: decodedText, loading: false });
		stopScanning(false);
	};

	const stopScanning = (closeModal) => {
		if (scanner) {
			scanner
				.stop()
				.then((ignore) => {
					console.log("Stopped scanning");
				})
				.catch((err) => handleError(err));
		}
		return closeModal && setOpenModal(false);
	};

	useEffect(() => {
		// This method will trigger user permissions
		Html5Qrcode.getCameras()
			.then((devices) => {
				if (devices && devices.length) {
					// let cameraId = devices[0].id;
					setScanner(new Html5Qrcode(qrcodeRegionId));
				}
			})
			.catch((err) => {
				handleError(err);
				setData({ error: err, loading: false });
			});
	}, []);

	return (
		<Dialog fullWidth onClose={handleModalClose} open={openModal}>
			<div style={{ padding: "26px 12px" }}>
				{data.loading && (
					<>
						<Html5QrcodePlugin scanner={scanner} onScanSuccess={onScanSuccess} />
						{/* Loader */}
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

					{data.decodedText && <ResultDisplay data={data} />}

					<Button variant="contained" sx={{ mt: "18px", mx: "auto" }} onClick={() => stopScanning(true)}>
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

const ResultDisplay = ({ data }) => {
	const product = products.find((product) => product.code === data.decodedText);

	if (product) {
		// Redirect to product page
		window.location.href = `/product/${product.code}`;
		return (
			<Typography align="center" variant="h6" my={1}>
				Loading...
			</Typography>
		);
	} else {
		return (
			<div className="result">
				<Typography align="center" variant="h6" mt={2.5} sx={{ fontWeight: "bold" }}>
					Code: {data.decodedText}
				</Typography>

				<Typography align="center" variant="h6" my={1} color={"error"}>
					No product found with this code
				</Typography>
			</div>
		);
	}
};

export default ScanQRcode;
