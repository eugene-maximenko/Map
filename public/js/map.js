mapboxgl.accessToken = 'pk.eyJ1IjoidGlnZXIzMTI5IiwiYSI6ImNrbmYwZWFzcjEzZ3Yyem83M2RzbjRubTAifQ.vjxDj3LPTG7_KpU3pIp29g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [30.751015, 46.466763], // starting position
    zoom: 3 // starting zoom
});

var serverPoint = new mapboxgl.Marker()
    .setLngLat([30.751015, 46.466763])
    .setPopup(new mapboxgl.Popup({ closeButton: false, }).setHTML("<h1>serverPoint!</h1>"))
    .addTo(map);

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});

// Add geolocate control to the map.
map.addControl(geolocate);

geolocate.on('geolocate', function () {
    console.log('A geolocate event has occurred.')
});

map.on('load', function () {
    map.addSource('national-park', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "n": 1,
                        "name": "Меморіал танкової битви",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.70832,
                            50.40373
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 2,
                        "name": "Меморіал танкової битви",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.70787,
                            50.40366
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 3,
                        "name": "Райлікарня",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.71165,
                            50.40732
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 4,
                        "name": "Райлікарня",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.71237,
                            50.40746
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 5,
                        "name": "ДЕУ",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.71601,
                            50.41014
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 6,
                        "name": "ДЕУ",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.71614,
                            50.41005
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 7,
                        "name": "Велес",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.71821,
                            50.41378
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 8,
                        "name": "Велес",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.7184,
                            50.414
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 9,
                        "name": "Львівський поворот",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.71829,
                            50.41781
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 10,
                        "name": "Львівський поворот",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.71859,
                            50.41774
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 11,
                        "name": "Міраж",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.71667,
                            50.41766
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 12,
                        "name": "Автовокзал",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.72969,
                            50.41905
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 13,
                        "name": "Автовокзал",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.72935,
                            50.41899
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 14,
                        "name": "Луцька брама",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73472,
                            50.41859
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 15,
                        "name": "Пошта",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73562,
                            50.4184
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 16,
                        "name": "Дитячий світ",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74053,
                            50.41822
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 17,
                        "name": "Магазин Мрія",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74133,
                            50.4181
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 18,
                        "name": "Майдан Незалежності",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74481,
                            50.41825
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 19,
                        "name": "Майдан Незалежності",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74563,
                            50.41823
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 20,
                        "name": "Заповідник",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74664,
                            50.41956
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 21,
                        "name": "Університет Україна",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74371,
                            50.42207
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 22,
                        "name": "Університет Україна",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74389,
                            50.42218
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 23,
                        "name": "Хоспіс",
                        "storona": "kinceva",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.7419,
                            50.4255
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 24,
                        "name": "Ринок Козацький",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75115,
                            50.4179
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 25,
                        "name": "Ринок Козацький",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74984,
                            50.41817
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 26,
                        "name": "Садова",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75565,
                            50.415
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 27,
                        "name": "Садова",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75597,
                            50.41457
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 28,
                        "name": "Базарчик",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.76173,
                            50.40888
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 29,
                        "name": "Базарчик",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.76075,
                            50.40982
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 30,
                        "name": "Базарчик суш",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.76463,
                            50.4079
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 31,
                        "name": "Базарчик суш",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.76434,
                            50.40772
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 32,
                        "name": "Статистика",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.77152,
                            50.40882
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 33,
                        "name": "Статистика",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.77227,
                            50.4088
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 34,
                        "name": "Сушильний",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.77573,
                            50.40943
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 35,
                        "name": "Сушильний",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.77495,
                            50.40918
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 36,
                        "name": "АТП 15606",
                        "storona": "kinceva",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.77878,
                            50.40555
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 37,
                        "name": "Семидубська",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.76262,
                            50.40705
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 38,
                        "name": "Семидубська",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.76255,
                            50.40691
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 39,
                        "name": "Склоресурс",
                        "storona": "kinceva",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.77221,
                            50.39519
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 40,
                        "name": "Механічний з-д",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75941,
                            50.40209
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 41,
                        "name": "Механічний з-д",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75959,
                            50.4036
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 42,
                        "name": "5-та школа",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75812,
                            50.39812
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 43,
                        "name": "5-та школа",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75773,
                            50.39787
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 44,
                        "name": "Сирзавод",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75672,
                            50.39397
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 45,
                        "name": "Сирзавод",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75668,
                            50.39455
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 46,
                        "name": "АТП",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75581,
                            50.391
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 47,
                        "name": "АТП",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75565,
                            50.39138
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 48,
                        "name": "Залізничний в-л",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75249,
                            50.38741
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 49,
                        "name": "Залізничний в-л",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75314,
                            50.38789
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 50,
                        "name": "Лісоторговий",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74398,
                            50.38649
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 51,
                        "name": "Лісоторговий",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74366,
                            50.38658
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 52,
                        "name": "М'ясокомбінат",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73825,
                            50.38486
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 53,
                        "name": "М'ясокомбінат",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73879,
                            50.38515
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 54,
                        "name": "вул.Кременецька",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74058,
                            50.38116
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 55,
                        "name": "вул.Кременецька",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74179,
                            50.3801
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 56,
                        "name": "вул.Космонавтів",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.750338435173035,
                            50.374457525590415
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 57,
                        "name": "вул.Космонавтів",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74995,
                            50.3745
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 58,
                        "name": "Волиця",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75275,
                            50.37283
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 59,
                        "name": "Волиця",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75424,
                            50.37138
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 60,
                        "name": "Цукровий з-д",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75891,
                            50.36694
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 61,
                        "name": "Цукровий з-д",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.759519,
                            50.365921
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 62,
                        "name": "Волиця2",
                        "storona": "kinceva",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75174,
                            50.35919
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 63,
                        "name": "ДЮСШ",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75377,
                            50.3739
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 64,
                        "name": "ДЮСШ",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75401,
                            50.3729
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 65,
                        "name": "вул.Широка",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75674,
                            50.38085
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 66,
                        "name": "ДЮСШ",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75712,
                            50.38112
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 67,
                        "name": "Нафтобаза",
                        "storona": "kinceva",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75972,
                            50.38591
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 68,
                        "name": "вул.Кривоноса",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73202,
                            50.38699
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 69,
                        "name": "вул.Кривоноса",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.7321,
                            50.38743
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 70,
                        "name": "вул.Крип'якеивча",
                        "storona": "kinceva",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73334,
                            50.38923
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 71,
                        "name": "вул.Кармелюка",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74296,
                            50.3896
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 72,
                        "name": "вул.Кармелюка",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.743,
                            50.38976
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 73,
                        "name": "вул.Підборці церква",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74066,
                            50.39055
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 74,
                        "name": "вул.Підборці",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73577,
                            50.39497
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 75,
                        "name": "вул.Підборці",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73598,
                            50.39508
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 76,
                        "name": "вул.Підборці2",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73392,
                            50.39765
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 77,
                        "name": "вул.Підборці2",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.73407,
                            50.39769
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 78,
                        "name": "АТП церква",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.7513,
                            50.39093
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 79,
                        "name": "АТП церква",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75074,
                            50.3911
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 80,
                        "name": "Хуторок",
                        "storona": "left",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74708,
                            50.39149
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 81,
                        "name": "Хуторок",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74757,
                            50.39155
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 82,
                        "name": "вул.Миру",
                        "storona": "kinceva",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74163,
                            50.39223
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 83,
                        "name": "Звірогосподарство",
                        "storona": "kinceva",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.72731,
                            50.40234
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 84,
                        "name": "Дубногаз",
                        "storona": "kinceva",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.74592,
                            50.40434
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 85,
                        "name": "вул.Пушкіна",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.76353,
                            50.39523
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 86,
                        "name": "вул.Пушкіна",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.76349,
                            50.39538
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 87,
                        "name": "з-д продтоварів",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75493,
                            50.40057
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 88,
                        "name": "з-д продтоварів",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75538,
                            50.40035
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 89,
                        "name": "Гімназія №2",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.7559,
                            50.4039
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 90,
                        "name": "Гімназія №2",
                        "storona": "right",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.75635,
                            50.40343
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 91,
                        "name": "вул.Вигнанка",
                        "storona": "kinceva",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.72169,
                            50.42935
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 92,
                        "name": "Лісгосп",
                        "storona": "left",
                        "paviljon": "no"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.70333,
                            50.4133
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 93,
                        "name": "Лісгосп",
                        "storona": "right",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.70297,
                            50.41339
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "n": 94,
                        "name": "вул.Берестецька",
                        "storona": "kinceva",
                        "paviljon": "yes"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            25.66707,
                            50.41052
                        ]
                    }
                }
            ]
        }
    });


    map.addLayer({
        'id': 'earthquakes-layer',
        'type': 'circle',
        'source': 'national-park',
        'paint': {
            'circle-radius': 8,
            'circle-stroke-width': 2,
            'circle-color': 'red',
            'circle-stroke-color': 'white'
        },
        'filter': ['==', '$type', 'Point']
    })
});