// Setting up a connection with the server
const socket = io();

console.log('Here it is');

mapboxgl.accessToken = 'pk.eyJ1IjoidGlnZXIzMTI5IiwiYSI6ImNrbmYwZWFzcjEzZ3Yyem83M2RzbjRubTAifQ.vjxDj3LPTG7_KpU3pIp29g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [30.751015, 46.466763], // starting position
    zoom: 3 // starting zoom
});

var home = new mapboxgl.Marker()
    .setLngLat([30.79642586433554, 46.57719435667684])
    .setPopup(new mapboxgl.Popup({ closeButton: false, }).setHTML("<h1>Hello World!</h1>"))
    .addTo(map);

var serverPoint = new mapboxgl.Marker()
    .setLngLat([30.751015, 46.466763])
    .setPopup(new mapboxgl.Popup({ closeButton: false, }).setHTML("<h1>Hello World!</h1>"))
    .addTo(map);

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});

// Add geolocate control to the map.
map.addControl(geolocate);