mapboxgl.accessToken = 'pk.eyJ1IjoidGlnZXIzMTI5IiwiYSI6ImNrbmYwZWFzcjEzZ3Yyem83M2RzbjRubTAifQ.vjxDj3LPTG7_KpU3pIp29g';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.79642586433554, 46.57719435667684],
            zoom: 12
        });

        // Create a default Marker and add it to the map.
        var home = new mapboxgl.Marker()
            .setLngLat([30.79642586433554, 46.57719435667684])
            .setPopup(new mapboxgl.Popup({ closeButton: false, }).setHTML("<h1>Hello World!</h1>"))
            .addTo(map);