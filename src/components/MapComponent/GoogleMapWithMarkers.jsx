import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import MapPinIcon from "../../assets/images/location-pin.png";
import "./GoogleMapWithMarkers.scss";

const locations = [
  {
    id: 1,
    position: { lat: 28.5488186, lng: 77.2522293 },
    name: "Intec Infonet Pvt. Ltd. Pvt. Ltd.",
    add: "706, Manjusha Building, 57,",
    adds: "Nehru Place, New Delhi - 110019",
    mob: "Tel : +91 7428174445",
  },
  {
    id: 2,
    position: { lat: 22.634, lng: 88.43458 },
    name: "Intec Infonet Pvt. Ltd. Pvt. Ltd.",
    add: "2E, Ved Bhumi, Koyla Vihar,",
    adds: "VIP Road, Kolkata-700052",
    mob: "Tel : 91-3340619001",
  },
  {
    id: 3,
    position: { lat: 12.97659, lng: 77.59927 },
    name: "Intec Infonet Pvt. Ltd. Pvt. Ltd.",
    add: "No.1254, B Wing, 14th Floor Mittal Towers,",
    adds: "M.G Road, Bengaluru-560001",
    mob: "Tel : 80-40930003",
  },
];

const GoogleMapWithMarkers = () => {
  const mapRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Detect client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // SSR-safe: skip on server

    const loader = new Loader({
      apiKey: "AIzaSyCdJNZIRWaBjJl4bLHI8B7ro5ATRVGGCtA", // <-- Replace with your API key
      version: "weekly",
    });

    const initMap = async () => {
      try {
        const { Map } = await loader.importLibrary("maps");
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");

        const map = new Map(mapRef.current, {
          center: { lat: 25.634, lng: 80.43458 },
          zoom: 6,
          mapId: "GTM-NWWXG6DV", // Optional: your custom Map ID
        });

        const infoWindow = new window.google.maps.InfoWindow();

        // Add markers
        locations.forEach((location) => {
          const iconImg = document.createElement("img");
          iconImg.src = MapPinIcon;
          iconImg.style.width = "40px";
          iconImg.style.height = "40px";

          const marker = new AdvancedMarkerElement({
            map,
            position: location.position,
            title: location.name,
            content: iconImg,
          });

          marker.addListener("gmp-click", () => {
            infoWindow.setContent(`
              <div>
                <h5 class="mb-1">${location.name}</h5>
                <p class="mb-1">${location.add}</p>
                <p class="mb-1">${location.adds}</p>
                <p class="mb-1">${location.mob}</p>
              </div>
            `);
            infoWindow.open({ map, anchor: marker });
          });
        });
      } catch (err) {
        console.error("Google Maps load error:", err);
      }
    };

    initMap();
  }, [isClient]);

  return (
    <div>
      {isClient ? (
        <div ref={mapRef} style={{ height: "600px", width: "100%" }} />
      ) : (
        <p>Loading map...</p> // SSR placeholder
      )}
    </div>
  );
};

export default GoogleMapWithMarkers;
