import {
	Container,
	Divider,
	FormControlLabel,
	FormGroup,
	Slider,
	Stack,
	Switch,
	Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import FeedbackModal from "../components/FeedbackModal";
import Layout from "../components/Layout";
import { AppContext } from "../context/AppContext";

const Settings = () => {
	const { speak, HandleSpeakEvents } = useContext(AppContext);
	const [fontSize, setFontSize] = useState(2);
	const [speechSpeed, setSpeechSpeed] = useState(2);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		speak("Settings", true);
	}, [speak]);

	const ttsContent = {
		fs: "Font size",
		ss: "Speech speed",
		enable_tts: "Enable Text-To-Speech",
		remind_me: "Remind me to give a review",
	};

	return (
		<Layout page="Settings">
			<Container maxWidth="sm" className="container">
				<form>
					<SettingsItem title="Font size" HandleSpeakEvents={HandleSpeakEvents}>
						<Stack spacing={2} direction="row" alignItems="center" sx={{ mt: 1.5, mb: 1.8 }}>
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

					<SettingsItem title="Speech speed" HandleSpeakEvents={HandleSpeakEvents}>
						<Stack spacing={2} direction="row" alignItems="center" sx={{ mt: 1.5, mb: 1.8 }}>
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

					<FormGroup {...HandleSpeakEvents(ttsContent.enable_tts)}>
						<FormControlLabel
							className="_flex_space_btw _m0"
							value="Enable Text-To-Speech"
							control={<Switch defaultChecked inputProps={{ "aria-label": "Enable Text-To-Speech" }} />}
							label={
								<Typography variant="h6" component="p" my={2.5} sx={{ fontWeight: "500" }}>
									Enable Text-To-Speech
								</Typography>
							}
							labelPlacement="start"
						/>
					</FormGroup>

					<Divider />

					<FormGroup {...HandleSpeakEvents(ttsContent.remind_me)}>
						<FormControlLabel
							className="_flex_space_btw _m0"
							value="Remind me to give a review"
							control={<Switch inputProps={{ "aria-label": "Remind me to give a review" }} />}
							label={
								<Typography variant="h6" component="p" my={2.5} sx={{ fontWeight: "500" }}>
									Remind me to give a review
								</Typography>
							}
							labelPlacement="start"
						/>
					</FormGroup>

					<Divider />

					<div className="setting_link">
						<Typography
							variant="h6"
							component="p"
							my={2.5}
							onClick={() => setOpenModal(true)}
							sx={{ fontWeight: "500" }}>
							Give Feedback
						</Typography>
					</div>

					<Divider />
				</form>
			</Container>

			{openModal && <FeedbackModal openModal={openModal} setOpenModal={setOpenModal} speak={speak} />}
		</Layout>
	);
};

const SettingsItem = ({ title, HandleSpeakEvents, children }) => {
	return (
		<div className="settingsItem" {...HandleSpeakEvents(title)}>
			<Typography variant="h6" component="p" sx={{ fontWeight: "500" }}>
				{title}
			</Typography>

			{children}

			<Divider />
		</div>
	);
};

export default Settings;
