import express, { Request, Response } from "express";
import router from "./auth/routes"
import newrout from "./shortner/create"


const app = express();

app.use("/", newrout);

app.listen(3000, () => {
	console.log("listenning on port: 3000")
})


