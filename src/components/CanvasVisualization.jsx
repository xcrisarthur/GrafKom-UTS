import React, { useEffect, useRef } from 'react';

const CanvasVisualization = ({ data }) => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      // Lakukan visualisasi di sini berdasarkan data yang diterima
      // Misalnya, Anda bisa membuat grafik atau diagram berdasarkan data.
  
      // Contoh: Menggambar lingkaran
      ctx.beginPath();
      ctx.arc(30, 30, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
  
      // Anda bisa menggunakan data untuk melakukan visualisasi yang lebih kompleks.
      // Misalnya, membuat grafik batang, diagram garis, dll.
  
    }, [data]);
  
    return <canvas ref={canvasRef} style={{ width: '100%', border: '5px solid black' }} />;
  };

export default CanvasVisualization;
