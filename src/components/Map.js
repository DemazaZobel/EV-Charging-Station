import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "1.5rem",
};

const center = {
  lat: 9.03,
  lng: 38.74,
};

const markers = [
  { id: 1, lat: 9.035, lng: 38.74 },
  { id: 2, lat: 9.025, lng: 38.73 },
  { id: 3, lat: 9.045, lng: 38.72 },
];

export default function Map() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const isGoogleLoaded = typeof window !== "undefined" && window.google?.maps;

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeIn">
          🔌 Find a Charging Station
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto animate-fadeIn delay-100">
          Locate available EV charging points near you — real-time and reliable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl shadow-2xl overflow-hidden border border-gray-200 bg-white transition-transform transform hover:scale-[1.02] duration-300">
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
              options={{
                styles: [], // optional custom styles
                streetViewControl: false,
                fullscreenControl: false,
              }}
            >
              {isGoogleLoaded &&
                markers.map((station) => (
                  <MarkerF
                    key={station.id}
                    position={{ lat: station.lat, lng: station.lng }}
                    animation={window.google.maps.Animation.DROP}
                    icon={{
                      url: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
                      scaledSize: new window.google.maps.Size(40, 40),
                    }}
                  />
                ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

      {/* Floating Tag */}
      <div className="absolute bottom-6 right-6 bg-green-500 text-white text-sm px-4 py-2 rounded-full shadow-md animate-bounce z-20">
        Live Charging Map 🔋
      </div>

      {/* Animations */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </section>
  );
}
