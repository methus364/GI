import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [ 17.4853, 101.7303]; // Bangkok coordinates

  return (
    <MapContainer center={position} zoom={12} style={{ height: '50vh', width: '50%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          This is Bangkok!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
