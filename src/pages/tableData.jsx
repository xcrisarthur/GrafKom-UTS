/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "../components/navbar";
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import DataTable from '../components/CSVTable';
const TableData = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../Datasets/DigiDB_digimonlist.csv');
      const reader = response.body.getReader();
      const result = await reader.read();

      const text = new TextDecoder().decode(result.value);
      const parsedData = Papa.parse(text, { header: true }).data;
      setCsvData(parsedData);
    };

    fetchData();
  }, []);
  

  return (
    <>
      <Navbar />
      <section className="mt-16">
        <div className="px-10">
        <DataTable data={csvData} />
        </div>
      </section>
      
    </>
  );
};

export default TableData;