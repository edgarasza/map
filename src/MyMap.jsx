import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import * as ELG from "esri-leaflet-geocoder";

function MyMap() {
  function Geocoder({ address }) {
    const map = useMap();

    ELG.geocode()
      .text(address)
      .run((err, results, response) => {
        console.log(results.results[0].latlng);
        const { lat, lng } = results.results[0].latlng;
        map.setView([lat, lng], 12);
      });

    return null;
  }

  const position = [53.35, 18.8];
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={6}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Geocoder address="Circuit de Barcelona-Catalunya" />
    </MapContainer>
  );
}
export default MyMap;
