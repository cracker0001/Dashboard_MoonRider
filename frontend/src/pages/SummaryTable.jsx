import React from "react";
import "./SummaryTable.css";

const SummaryTable = () => {
  return (
    <div className="summary-container">
      <h2 className="summary-title">Summary</h2>
      <table className="summary-table">
        <thead>
          <tr>
            <th rowSpan="2">Vehicle</th>
            <th colSpan="3">Current</th>
            <th colSpan="3">Voltage</th>
            <th colSpan="3">Power</th>
            <th colSpan="3">Battery Temp</th>
            <th colSpan="3">Motor Temp</th>
            <th colSpan="3">MCU Temp</th>
            <th colSpan="3">Rated Capacitance</th>
          </tr>
          <tr>
            {/* Repeat Min Max Avg */}
            {Array(7)
              .fill()
              .map((_, i) => (
                <React.Fragment key={i}>
                  <th>Min</th>
                  <th>Max</th>
                  <th>Avg</th>
                </React.Fragment>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vehicle 1</td>
            {Array(21)
              .fill()
              .map((_, i) => (
                <td key={i}></td>
              ))}
          </tr>
          <tr>
            <td>Vehicle 2</td>
            {Array(21)
              .fill()
              .map((_, i) => (
                <td key={i}></td>
              ))}
          </tr>
          <tr>
            <td>Vehicle 3</td>
            {Array(21)
              .fill()
              .map((_, i) => (
                <td key={i}></td>
              ))}
          </tr>
          <tr>
            <td>Vehicle 4</td>
            {Array(21)
              .fill()
              .map((_, i) => (
                <td key={i}></td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
