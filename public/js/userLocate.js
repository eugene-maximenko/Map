// Setting up a connection with the server
const socket = io();

socket.emit('joinInitMap');

socket.on('consoleMessage', message => {
    console.log(message);
})

mapboxgl.accessToken = 'pk.eyJ1IjoidGlnZXIzMTI5IiwiYSI6ImNrbmYwZWFzcjEzZ3Yyem83M2RzbjRubTAifQ.vjxDj3LPTG7_KpU3pIp29g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [30.751015, 46.466763], // starting position
    zoom: 3 // starting zoom
});

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});

// Add geolocate control to the map.
map.addControl(geolocate);

geolocate.on('geolocate', function (data) {
    socket.emit('updateGeolocation', {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude
    })
});

socket.on('updatePoint', ({ longitude, latitude, id }) => {
    console.log(`data from ${id}`, longitude, latitude);

    // var serverPoint = new mapboxgl.Marker()
    //     .setLngLat([longitude, latitude])
    //     .setPopup(new mapboxgl.Popup({ closeButton: false, }).setHTML("<h1>another User</h1>"))
    //     .addTo(map);

    map.addSource('some id', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        longitude,
                        latitude

                    ]
                }
            }]
        }
    });

    map.addLayer({
        'id': 'earthquakes-layers',
        'type': 'circle',
        'source': 'some id',
        'paint': {
            'circle-radius': 4,
            'circle-stroke-width': 2,
            'circle-color': 'blue',
            'circle-stroke-color': 'orange'
        },
        'filter': ['==', '$type', 'Point']
    })
})