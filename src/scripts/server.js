/* eslint-disable no-undef */
// server.js

const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvFilePath = path.resolve(__dirname, '../Datasets/DigiDB_supportlist.csv'); // Sesuaikan dengan nama dan lokasi file CSV Anda
const csvData = fs.readFileSync(csvFilePath, 'utf8');

const parseCSV = () => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvData, {
      complete: (result) => {
        resolve(result.data);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}

module.exports = parseCSV;
