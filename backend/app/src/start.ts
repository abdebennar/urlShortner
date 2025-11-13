import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Express + TypeScript 👋");
});


app.listen(3000, () => {
	console.log("listenning on port: 3000")
})


