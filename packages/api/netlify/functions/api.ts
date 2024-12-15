import express from "express";
import serverless from "serverless-http";
import router from "../../src/routes/companies.route";
import cors, { CorsOptions } from 'cors';

const api = express();

const corsOptions: CorsOptions = {
  origin: process.env.ALLOWED_ORIGIN || "*",
};

api.use(cors(corsOptions));

api.use("/api/", router);

export const handler = serverless(api);