import express, { Request, Response } from "express";
import router from "./auth/routes"


const app = express();

app.use("/", router);

app.listen(3000, () => {
	console.log("listenning on port: 3000")
})


