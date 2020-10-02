import React, { useState, useEffect } from "react";
import { FormControl, Input, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./App.css";

import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [user, setUser] = useState("");

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "asc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	useEffect(() => {
		setUser(prompt("Please Enter your name"));
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		db.collection("messages").add({
			message: input,
			user: user,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};

	return (
		<div className="App">
			<div className="row">
				<div>
					<img
						src="https://scontent.fbom31-1.fna.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=8ISNm1HI0EsAX9Pu7YK&_nc_ht=scontent.fbom31-1.fna&oh=f5231baa7a3cd5601b92ca9706746060&oe=5F7C47B3"
						alt="logo_img"
					/>
				</div>
				<div>
					<h2>Welcome {user}</h2>
				</div>
			</div>
			<FlipMove>
				{messages.map(({ id, message }) => (
					<Message key={id} user={user} message={message} />
				))}
			</FlipMove>
			<form className="">
				<FormControl className="app_form app_formControl">
					<Input
						className="app_input"
						placeholder="Type a message.."
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>

					<IconButton
						className="ap_iconButton"
						disabled={!input}
						type="submit"
						variant="contained"
						color="primary"
						onClick={sendMessage}
					>
						<SendIcon></SendIcon>
					</IconButton>
				</FormControl>
			</form>
		</div>
	);
}

export default App;
