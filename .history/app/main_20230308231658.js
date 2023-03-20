import { TYPES } from "./types.js";

const PLACE = { lat:  -23.561487742630142, lng: -46.65588190255657 }

function handleMapLoaded(map) {
    console.log("Map loaded");    
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "673de7f81b936859",
        center: PLACE,
        zoom: 19,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false,
    });

    google.maps.event.addListenerOnce(map, "idle", () => {
       handleMapLoaded(map);
    });

    // get nearby places
    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(
        {
            location: PLACE,
            types: TYPES,
            radius: 100,
        },
        (results, status) => {
            console.log(results)
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    const place = results[i];
                    console.log(place);
                    new google.maps.Marker({
                        position: place.geometry.location,
                        map,
                        title: place.name,
                        icon: {
                            url: "fire-hydrant.svg",
                            scaledSize: new google.maps.Size(42, 42),
                        },
                        animation: google.maps.Animation.DROP,
                    });
                }
            }
        }
    );



    // new google.maps.Marker({
    //     position: { lat:  -23.561487742630142, lng: -46.65588190255657 },
    //     map,
    //     title: "Hello World!",
    //     icon: {
    //         url: "fire-hydrant.svg",
    //         scaledSize: new google.maps.Size(42, 42),
    //     },
    //     animation: google.maps.Animation.DROP,
    // });

}

window.initMap = initMap;
