import React, { useState } from 'react';
import Chart from './chart.js';

const ChartComponent = () => {
  const [chartCreated, setChartCreated] = useState(false);

  const createChart = () => {
    if (!chartCreated) {
      const jsonDataInput = document.getElementById('jsonData');
      const jsonData = JSON.parse(jsonDataInput.value);

      const timestamps = jsonData.cpu.map(entry => {
        const date = new Date(entry.timestamp * 1000);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      });
      const frequencies = jsonData.cpu.map(entry => entry.frequency);
      const temperatures = jsonData.cpu.map(entry => entry.temperature);

      const ctx = document.getElementById('cpuChart').getContext('2d');
      new Chart(ctx, {
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
            },
            {
              label: 'CPU temperature',
              yAxisID: 'temperature',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              data: temperatures,
            },
          ],
        },
        options: {
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
              title: {
                display: true,
                text: 'Temperature',
              },
            },
          },
        },
      });

      setChartCreated(true);
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
            placeholder='{"cpu":[
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
              ]}
              '
            ></textarea>
            <button id="createGraphButton" onClick={createChart}>
            Build Graph
            </button>
        </div>
      <canvas id="cpuChart"></canvas>
      <p/>
    </div>
  );
};

export default ChartComponent;
