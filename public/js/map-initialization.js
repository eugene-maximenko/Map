mapboxgl.accessToken =
  'pk.eyJ1IjoidGlnZXIzMTI5IiwiYSI6ImNrbmYwZWFzcjEzZ3Yyem83M2RzbjRubTAifQ.vjxDj3LPTG7_KpU3pIp29g';

// Init the map
const map = new mapboxgl.Map({
  container: 'map', // The HTML element in which Mapbox GL JS will render the map
  style: 'mapbox://styles/mapbox/streets-v10', // The map's Mapbox style
  center: [30.751015, 46.466763], // starting position
  zoom: 5,
});
