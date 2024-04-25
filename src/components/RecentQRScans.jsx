import React, { useContext } from "react";
import { Link, ListItem, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const RecentQRScans = ({ recentScans }) => {
	return (
		<>
			<Stack spacing={2} className="recent_scans">
				{recentScans.map((product) => (
					<RecentScanItem key={product.id} product={product} />
				))}
			</Stack>
		</>
	);
};

const RecentScanItem = ({ product }) => {
	const { HandleSpeakEvents } = useContext(AppContext);
	const ttsContent = `Recent scan: ${product.name} by ${product.brand}. Link: View details`;

	return (
		<ListItem className="recent_scans_item" {...HandleSpeakEvents(ttsContent)}>
			<img src={product.img} alt={product.name} />

			<div className="details">
				<h5 className="brand">{product.brand}</h5>

				<p>{product.name}</p>

				<Link component={RouterLink} to={"/product/" + product.code} underline="hover">
					View details
				</Link>
			</div>
		</ListItem>
	);
};

export default RecentQRScans;
