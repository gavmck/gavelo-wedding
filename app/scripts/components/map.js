/* global document */
/**
 * Map module.
 * @module components/map
 */

import GoogleMapsLoader from 'google-maps';

/** Init map */
export default function init() {
  const mapContainer = document.querySelector('.map');

  if (mapContainer) {
    GoogleMapsLoader.load((google) => {
      new google.maps.Map(mapContainer, {});
    });
  }
}
