import { Request, Response } from "express";
import companyService from "../services/companies.service";

const companyController = {
  getCompanies: async (req: Request, res: Response) => {
    const data = companyService.getCompanies();
    res.status(200).send(data);
  },
};

export default companyController;