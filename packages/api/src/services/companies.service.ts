import * as fs from 'fs';
import * as path from 'path';

const companyService = {
  getCompanies() {
    const dataFilePath = path.join(
      process.cwd(),
      'src',
      'data',
      'data.json',
    );
    const rawData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(rawData);
  }
}

export default companyService;
