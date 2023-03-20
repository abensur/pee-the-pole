function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "673de7f81b936859",
        center: { lat:  -23.561487742630142, lng: -46.65588190255657 },
        zoom: 18,
    });

    new google.maps.Marker({
        position: { lat:  -23.561487742630142, lng: -46.65588190255657 },
        map,
        title: "Hello World!",
    });
}

window.initMap = initMap;
