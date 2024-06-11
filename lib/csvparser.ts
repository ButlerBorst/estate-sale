
import fs from 'fs';
import Papa from 'papaparse';

export async function parseCSV(filePath:string) {
  const csvFile = fs.readFileSync(filePath);
  const csvData = csvFile.toString();

  return new Promise((resolve, reject) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error: any ) => {
        reject(error);
      },
    });
  });
}
