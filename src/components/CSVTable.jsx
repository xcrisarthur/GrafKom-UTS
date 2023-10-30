/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/CSVTable.js
import React from 'react';

const CSVTable = ({ data }) => {
    if (data.length === 0) return null;

    const headers = Object.keys(data[0]);
  
    return (
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
    );
}

export default CSVTable;
