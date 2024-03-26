import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Spinner from "./Spinner";
import Error from "./Error";

function Map() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setIsLoading(true);
        if ("geolocation" in navigator) {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setIsLoading(false);
        }
      } catch (error) {
        setError("Nie udało się załadować mapy 🚫");
        setIsLoading(false);
      }
    };
    fetchLocation();
  }, []);

  if (isLoading) return <Spinner />;

  if (error) return <Error error={error} />;

  return (
    <div className="flex-1">
      {position.latitude && position.longitude && (
        <MapContainer
          center={[position.latitude, position.longitude]}
          zoom={20}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />

          <Marker position={[position.latitude, position.longitude]}>
            <Popup>🍕Pizza Valley</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
