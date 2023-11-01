/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/CSVTable.js
import React from "react";

const CSVTable = ({ data }) => {
  if (data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <>
      <table id="myTable" className="display ">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
          </tr>
          <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
          </tr>
        </tbody>
      </table>

      
      <table className="min-w-full border border-collapse border-gray-800">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="border p-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header} className="border p-2">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CSVTable;
