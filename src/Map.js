import React, { useRef, useEffect } from 'react';
import { loadModules } from 'esri-loader';

// import { loadModules } from '@esri/react-arcgis';

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
    loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
      .then(([Map, MapView]) => {
        const map = new Map({
          basemap: 'topo-vector'
        });

        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [-74.059, 4.684],
          zoom: 14
        });
      });
  }, []);

  return <div className="map" ref={mapRef}></div>;
};

export default Map;
