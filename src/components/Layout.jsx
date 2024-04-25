import React from "react";
import { Container, Link } from "@mui/material";
import Logo from "../assets/img/logo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const Layout = ({ page, children }) => {
	return (
		<div className={page}>
			<header>
				<Container maxWidth="sm" className="container">
					<Link href="/" underline="none">
						<img className="logo" src={Logo} alt="Whisper Care" />
					</Link>
					<Link href="/" underline="none">
						<AccountCircleIcon className="icon" sx={{ color: "#111", fontSize: 34 }} />
					</Link>
				</Container>
			</header>

			<main>{children}</main>

			<div className="action_menu">
				<Container maxWidth="sm" className="container">
					<Link href="/" underline="none">
						<HomeIcon sx={{ color: "#888", fontSize: 42 }} />
					</Link>
					<Link href="/" underline="none">
						<PlayCircleIcon sx={{ color: "#9747FF", fontSize: 52 }} />
					</Link>
					<Link href="/" underline="none">
						<SettingsIcon sx={{ color: "#888", fontSize: 42 }} />
					</Link>
				</Container>
			</div>
		</div>
	);
};

export default Layout;
