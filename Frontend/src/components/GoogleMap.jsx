import React from 'react';
import PropTypes from 'prop-types';

const GoogleMap = ({
  location,
  zoom = 12,
  width = "600",
  height = "450",
  style = { border: "0" },
  allowFullScreen = true,
  loading = "lazy",
  referrerPolicy = "no-referrer-when-downgrade",
}) => {
  
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${encodeURIComponent(location)}&zoom=${zoom}`;

  return (
    <div className="map-container">
      <iframe
        src={src}
        width={width}
        height={height}
        style={style}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy={referrerPolicy}
        title={`Map of ${location}`}
      />
    </div>
  );
};

GoogleMap.propTypes = {
  location: PropTypes.string.isRequired, // Location to display on the map
  zoom: PropTypes.number,               // Zoom level (default: 12)
  width: PropTypes.string,              // Width of the iframe
  height: PropTypes.string,             // Height of the iframe
  style: PropTypes.object,              // Custom styles for the iframe
  allowFullScreen: PropTypes.bool,      // Whether to allow fullscreen
  loading: PropTypes.string,            // Loading attribute
  referrerPolicy: PropTypes.string,     // Referrer policy
};

export default GoogleMap;
