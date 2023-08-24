import React, { useState } from 'react';
import Chart from './chart.js';

const ChartComponent = () => {
  const [chartInstance, setChartInstance] = useState(null);
  const [chartCreated, setChartCreated] = useState(false);
  const [demoData, setDemoData] = useState(`{ "SN": "SN0001",
  "note": "This is a note",
  "cpu":[
  {"timestamp":1692713925, "frequency":3219.181, "temperature":61.0},
  {"timestamp":1692713926, "frequency":2740.720, "temperature":59.0},
  {"timestamp":1692713927, "frequency":1705.188, "temperature":61.0},
  {"timestamp":1692713928, "frequency":3010.267, "temperature":68.0},
  {"timestamp":1692713929, "frequency":1500.000, "temperature":59.0},
  {"timestamp":1692713930, "frequency":1500.000, "temperature":58.0},
  {"timestamp":1692713931, "frequency":3860.388, "temperature":58.0},
  {"timestamp":1692713932, "frequency":457.516, "temperature":59.0},
  {"timestamp":1692713933, "frequency":1500.000, "temperature":59.0},
  {"timestamp":1692713934, "frequency":1500.000, "temperature":57.0}
]}`);
  const loadDemoData = () => {
    document.getElementById('jsonData').value = demoData;
    createChart();
  };
  const createChart = () => {
    if (chartInstance) {
      chartInstance.destroy(); // Уничтожить предыдущий график, если он существует
    }
    setChartCreated(false);
    if (!chartCreated) {
      const jsonDataInput = document.getElementById('jsonData');
      const jsonData = JSON.parse(jsonDataInput.value);

      const serialNumber = jsonData.SN;

      const noteData = () => {
        if (jsonData.note) {
          return `, Note: ${jsonData.note}`;
        } else {
          return '';
        }
      };

      const dateLog = (jsonData) => {
        const firstEntry = jsonData.cpu[0];
        const firstTimestamp = new Date(firstEntry.timestamp * 1000);
        const year = firstTimestamp.getFullYear();
        const month = String(firstTimestamp.getMonth() + 1).padStart(2, '0');
        const day = String(firstTimestamp.getDate()).padStart(2, '0');
        const hours = String(firstTimestamp.getHours()).padStart(2, '0');
        const minutes = String(firstTimestamp.getMinutes()).padStart(2, '0');
        const seconds = String(firstTimestamp.getSeconds()).padStart(2, '0');
        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
      };

      const timestamps = jsonData.cpu.map(entry => {
        const date = new Date(entry.timestamp * 1000);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      });
      const frequencies = jsonData.cpu.map(entry => entry.frequency);
      const temperatures = jsonData.cpu.map(entry => entry.temperature);
      const formattedFirstTimestamp = dateLog(jsonData);
      const note = noteData();

      const ctx = document.getElementById('cpuChart').getContext('2d');
      setChartInstance(new Chart(ctx, {
        type: 'line',
        data: {
          labels: timestamps,
          datasets: [
            {
              label: 'CPU frequency',
              yAxisID: 'frequency',
              borderColor: 'blue',
              backgroundColor: 'rgba(0, 0, 255, 0.2)',
              data: frequencies,
              pointStyle: 'circle',
              pointRadius: 5,
              pointHoverRadius: 10,
            },
            {
              label: 'CPU temperature',
              yAxisID: 'temperature',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              data: temperatures,
              pointStyle: 'circle',
              pointRadius: 5,
              pointHoverRadius: 10
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: `Serial Number: ${serialNumber}, Date: ${formattedFirstTimestamp}${note}`
            },
          },
          stacked: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            x: {},
            frequency: {
              alignToPixels: true,
              position: 'left',
              title: {
                display: true,
                text: 'Frequency',
              },
            },
            temperature: {
              alignToPixels: true,
              position: 'right',
              grid: {
                drawOnChartArea: false,
              },
              title: {
                display: true,
                text: 'Temperature',
              },
            },
          },
        },
      }));
    }
  };

  return (
    <div className="container">
        <p style={{margin: "20px 10px",}}></p>
        <h1>CPU frequency and temperature graph</h1>
        <div>
            <label htmlFor="jsonData">JSON-data:</label>
            <p/>
            <textarea
            id="jsonData"
            rows="5"
            cols='46'
            ></textarea>
            <br/>
            <button id="loadDemoDataButton" onClick={loadDemoData}>
              Demo
            </button>
            <button id="createGraphButton" onClick={createChart}>
              Graph it!
            </button>
        </div>
      <canvas id="cpuChart"></canvas>
      <p/>
    </div>
  );
};

export default ChartComponent;
