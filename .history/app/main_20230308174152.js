function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "673de7f81b936859",
        center: { lat:  -23.561487742630142, lng: -46.65588190255657 },
        zoom: 19,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false,
    });

    new google.maps.Marker({
        position: { lat:  -23.561487742630142, lng: -46.65588190255657 },
        map,
        title: "Hello World!",
        icon: {
            url: "fire-hydrant.svg",
            scaledSize: new google.maps.Size(42, 42),
        }
    });
}

window.initMap = initMap;
