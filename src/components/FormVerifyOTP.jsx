import React, { useState } from "react";
import { Button, Card, CardActions, Link, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import products from "../assets/products-demo.json";

const FormVerifyOTP = ({ setLoading, setProductData, speak, HandleSpeakEvents }) => {
	const [OTPcode, setOTPcode] = useState("");

	const handleCancel = () => {
		setOTPcode("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (OTPcode) {
			setLoading(true);
			// API call to verify OTP code - for demo purposes, we'll just set a timeout
			setTimeout(() => {
				setLoading(false);
				setProductData(products[0]);
			}, 1000);
		} else {
			speak("Please enter the verification code");
			// alert("Please enter the verification code");
		}
	};

	return (
		<div className="header_card">
			<Card className="card">
				<form onSubmit={handleSubmit}>
					<Typography
						component="h5"
						align="center"
						mb={1}
						{...HandleSpeakEvents("Form: Please check your sms/email after product purchase")}
						sx={{ fontWeight: 500 }}>
						Please check your sms/email after product purchase
					</Typography>

					<MuiOtpInput
						className="OTPfield"
						length={5}
						value={OTPcode}
						onChange={(e) => setOTPcode(e)}
						{...HandleSpeakEvents("Input: Verification code")}
						TextFieldsProps={{ type: "number", size: "large", placeholder: "-" }}
					/>

					<Typography component="p" align="center" className="mute_text">
						Get the code to your number after purchase! <Link href="#">Click to resend</Link>
					</Typography>

					<CardActions className="form_actions">
						<Button
							size="large"
							variant="outlined"
							{...HandleSpeakEvents("Cancel button")}
							onClick={handleCancel}>
							Cancel
						</Button>
						<Button size="large" variant="contained" {...HandleSpeakEvents("Verify button")} type="submit">
							Verify
						</Button>
					</CardActions>
				</form>
			</Card>
		</div>
	);
};

export default FormVerifyOTP;
