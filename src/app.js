const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
	// res.sendStatus(500);
});

app.post("/", (req, res) => {
	res.send("Hello World!");
	// res.sendStatus(500);
});

const port = 8080;
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});


module.exports = app;