import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";

const Message = forwardRef(({ message, user }, ref) => {
	const isUser = user === message.user;

	return (
		<div ref={ref} className={`message $(isUser && "message_user")`}>
			<Card className={isUser ? "message_userCard" : "message_guestCard"}>
				<CardContent>
					<Typography className="heading-Text" variant="h5" component="h2">
						{!isUser && `${message.user || "Unknown User"}:`} {message.message}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
});

export default Message;
