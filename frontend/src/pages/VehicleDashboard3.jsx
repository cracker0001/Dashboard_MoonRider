import React, { useEffect, useState } from "react";
import MapView from "../components/Mapview";
import "../styles/VehicleDashboard.css";

const VehicleDashboard1 = () => {
  const vehicleDetails = [
    "SOC", "SOH", "Battery Voltage", "Battery Temperature", "Battery Current",
    "Speed", "Motor Speed", "GPS odometer", "MCU Temperature", "Motor Temperature",
    "Power", "Battery over Voltage alert", "Battery over Temperature alert",
    "Controller Over Current Alert", "Thermal Runway alert", "Controller fault",
    "Regen Flag", "Alarm", "Protection", "Remaining hours",
    "Remaining battery Energy", "Maximum Temperature", "Cell Voltage (Min)",
    "Cell Voltage (Max)", "Rated Capacity", "CAN bus status", "Motion",
    "Charge Cycle count", "Discharge Cycle count"
  ];

  const leftSideDetails = vehicleDetails.slice(0, 23);
  const rightSideDetails = vehicleDetails.slice(23);

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/vehicleData.json");
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData();
  }, []);

  const renderCard = (label) => (
    <div key={label} className="vehicle-card">
      <div>{label}</div>
      <div className="vehicle-value">{data[label] || "—"}</div>
    </div>
  );

  return (
    <div className="vehicle-dashboard-container">
      {/* LEFT SIDE */}
      <div className="vehicle-dashboard-left">
        <h1 className="vehicle-title">Vehicle 3</h1>
        <div className="vehicle-grid">
          {leftSideDetails.map((label) => renderCard(label))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="vehicle-dashboard-right">
        {/* MAP FIXED HEIGHT */}
        <div className="vehicle-map-section">
          <MapView />
        </div>

        {/* CARDS BELOW MAP */}
        <div className="vehicle-grid vehicle-bottom">
          {rightSideDetails.map((label) => renderCard(label))}
        </div>
      </div>
    </div>
  );
};

export default VehicleDashboard1;
