import express from "express";
import companyController from "../controllers/companies.controller";

const router = express.Router();

router.get("/companies", companyController.getCompanies);

export default router;