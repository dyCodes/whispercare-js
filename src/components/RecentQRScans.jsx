import { Link, ListItem, Stack } from "@mui/material";
import React from "react";

const RecentQRScans = () => {
	return (
		<>
			<Stack spacing={2} className="recent_scans">
				<RecentScanItem
					brand="MARY KAY"
					product="Sunscreen broad SPF 15"
					img={process.env.PUBLIC_URL + "/assets/mary_kay.png"}
				/>

				<RecentScanItem
					brand="ESTEE LAUDER"
					product="Sunscreen broad SPF 15"
					img={process.env.PUBLIC_URL + "/assets/estee_lauder.png"}
				/>

				<RecentScanItem
					brand="MARY KAY"
					product="Sunscreen broad SPF 15"
					img={process.env.PUBLIC_URL + "/assets/mary_kay.png"}
				/>

				<RecentScanItem
					brand="ESTEE LAUDER"
					product="Sunscreen broad SPF 15"
					img={process.env.PUBLIC_URL + "/assets/estee_lauder.png"}
				/>
			</Stack>
		</>
	);
};

const RecentScanItem = ({ brand, product, img }) => {
	return (
		<ListItem className="recent_scans_item">
			<img src={img} alt={product} />

			<div className="details">
				<h5 className="brand">{brand}</h5>

				<p>{product}</p>

				<Link href="#" underline="hover">
					View details
				</Link>
			</div>
		</ListItem>
	);
};

export default RecentQRScans;
