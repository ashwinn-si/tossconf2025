import React from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const stJosephLocation = [12.8942, 80.2285];

const Map = () => {
    return (
        <MapContainer
            center={stJosephLocation}
            zoom={15}
            zoomControl={false}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="topleft" />
            <Marker position={stJosephLocation} icon={icon}>
                <Popup>
                    St. Joseph's Institute of Technology
                    <br /> Chennai
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
