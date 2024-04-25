import React from "react";
import { Link, ListItem, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
	return (
		<ListItem className="recent_scans_item">
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
