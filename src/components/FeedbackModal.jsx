import React, { useEffect, useState } from "react";
import { Alert, Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const FeedbackModal = ({ openModal, setOpenModal, speak }) => {
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		speak("Give a feedback about our app");
	}, [speak]);

	const handleCancel = () => {
		setOpenModal(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setCompleted(true);
		speak("Thank you for your feedback!");
	};

	return (
		<Dialog
			open={openModal}
			onClose={handleCancel}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			className="feedback_modal">
			<DialogTitle id="alert-dialog-title" sx={{ textAlign: "center", fontSize: "1.12rem" }}>
				Give a feedback about our app
			</DialogTitle>

			{completed ? (
				<div className="success_div">
					<Alert severity="success">Thank you for your feedback!</Alert>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="content">
						<textarea
							id="feedback"
							cols="30"
							rows="6"
							placeholder="Enter your feedback here..."
							autoFocus
							required
						/>
					</div>

					<DialogActions className="form_actions">
						<Button size="large" variant="outlined" onClick={handleCancel}>
							Cancel
						</Button>
						<Button size="large" variant="contained" type="submit">
							Submit
						</Button>
					</DialogActions>
				</form>
			)}
		</Dialog>
	);
};

export default FeedbackModal;
