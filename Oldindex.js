const express = require('express')
const app = express()
const awsServerlessExpress = require('aws-serverless-express')

app.get('/', (req, res) => {
	res.send("Hello, world!")
})

app.get('/user', (req, res) => {
	res.send("Hello, world!")
})

app.get('/user/:userId', (req, res) => {
	res.send("Hello, world!")
})
app.get('/prod/user/:userId', (req, res) => {
	res.send("Hello, world!")
})

app.get('/prod/VendashBackend/user/:userId', (req, res) => {
	res.send("Hello, world!")
})

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};

// module.exports = app

// if(precess.env.ENVIRONMENT !== 'lambda') {
// 	app.listen(PORT, () => {
// 		console.log("Server booted up...")
// 	})
// }