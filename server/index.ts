import express from "express";

const app = express();

const PORT = 4396;

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.send(req.headers);
});

app.get("/index.js", (req, res) => {
	res.send("console.log(1)");
});

app.listen(PORT, function () {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
