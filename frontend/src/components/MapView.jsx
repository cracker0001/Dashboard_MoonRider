import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const iconUrl = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png";

const deviceIcon = new L.Icon({
  iconUrl,
  iconSize: [32, 32],
});

const MapView = () => {
  const devices = [
    { id: 1, lat: 12.838, lng: 77.678, name: "Vehicle 1" },
    { id: 2, lat: 12.839, lng: 77.679, name: "Vehicle 2" },
    { id: 3, lat: 12.840, lng: 77.676, name: "Vehicle 3" },
  ];

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[12.838, 77.678]}
        zoom={16}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {devices.map((device) => (
          <Marker key={device.id} position={[device.lat, device.lng]} icon={deviceIcon}>
            <Popup>{device.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
