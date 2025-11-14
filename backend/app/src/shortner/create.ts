
import express, { Router, Request, Response } from "express"
import crypto, { BinaryLike } from "crypto"
import pool, { query } from "@/lib/postgres"


function generateUrlSafeString(input: BinaryLike, length = 16) {
	// SHA-256 hash
	const hash = crypto.createHash('sha256').update(input).digest();

	// Base64 URL-safe encoding
	let base64 = hash.toString('base64')
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=+$/, '');

	// Cut to desired length
	return base64.slice(0, length);
}


const router = Router();
// router.use(express.jsone());
router.post("/new:url", (req: Request, res: Response) => {
	const url: String | null = req.params.url ?? null;
	if (!url)
		res.status(400).send("Bad Request");


	// create the url 
	const shortUrl: String = generateUrlSafeString(Buffer.from(url, 'utf-8'));
	query("INSERT INTO urls (target_url, short_url) VALUES (?, ?)", [url, shortUrl]);
	res.status(200).send();
});
