import React, { useState } from 'react';
import { loadModules } from '@esri/react-arcgis';

const BasemapSwitcher = ({ view }) => {
  const [basemap, setBasemap] = useState('topo-vector');

  const handleBasemapChange = (event) => {
    const value = event.target.value;
    setBasemap(value);
    view?.map && (view.map.basemap = value);
  };

  return (
    <div className="basemap-switcher">
      <label>
        <input
          type="radio"
          name="basemap"
          value="topo-vector"
          checked={basemap === 'topo-vector'}
          onChange={handleBasemapChange}
        />
        Topográfico
      </label>
      <label>
        <input
          type="radio"
          name="basemap"
          value="streets-vector"
          checked={basemap === 'streets-vector'}
          onChange={handleBasemapChange}
        />
        Calles
      </label>
    </div>
  );
};

export default BasemapSwitcher;
