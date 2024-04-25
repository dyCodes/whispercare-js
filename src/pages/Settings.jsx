import { Button, Container, Divider, Slider, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AppContext } from "../context/AppContext";

const Settings = () => {
	const { speak } = useContext(AppContext);
	const [fontSize, setFontSize] = useState(2);
	const [speechSpeed, setSpeechSpeed] = useState(2);

	useEffect(() => {
		speak("Settings", true);
	}, [speak]);

	return (
		<Layout page="Settings">
			<Container maxWidth="sm" className="container">
				<form action="">
					<SettingsItem title="Font size">
						<Stack spacing={2} direction="row" sx={{ mt: 1.5, mb: 1.8 }} alignItems="center">
							<span>Aa</span>
							<Slider
								aria-label="Font size"
								valueLabelDisplay="auto"
								step={1}
								marks
								min={1}
								max={3}
								value={fontSize}
								onChange={(e, value) => setFontSize(value)}
							/>
							<span style={{ fontSize: "26px" }}>Aa</span>
						</Stack>
					</SettingsItem>

					<SettingsItem title="Speech speed">
						<Stack spacing={2} direction="row" sx={{ mt: 1.5, mb: 1.8 }} alignItems="center">
							<span>Slow</span>
							<Slider
								aria-label="Speech speed"
								valueLabelDisplay="auto"
								step={1}
								marks
								min={1}
								max={3}
								value={speechSpeed}
								onChange={(e, value) => setSpeechSpeed(value)}
							/>
							<span>Fast</span>
						</Stack>
					</SettingsItem>

					<div className="form_actions" style={{ paddingTop: "24px" }}>
						<Button size="large" variant="outlined">
							Cancel
						</Button>
						<Button size="large" variant="contained" type="submit">
							Save
						</Button>
					</div>
				</form>
			</Container>
		</Layout>
	);
};

const SettingsItem = ({ title, children }) => {
	return (
		<div className="settingsItem">
			<Typography variant="h6" component="p" sx={{ fontWeight: "500" }}>
				{title}
			</Typography>

			{children}

			<Divider />
		</div>
	);
};
export default Settings;
