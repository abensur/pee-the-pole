function initMap() {
    new google.maps.Map(document.getElementById("map"), {
        mapId: "673de7f81b936859",
        center: { lat: 48.85, lng: 2.35 },
        zoom: 12,
    });
}

window.initMap = initMap;
