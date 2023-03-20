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

    // select all visible markers
    const markers = document.querySelectorAll(".marker");

    // add event listener to each marker
    markers.forEach((marker) => {
        marker.addEventListener("click", (e) => {
            const lat = e.target.dataset.lat;
            const lng = e.target.dataset.lng;
            const name = e.target.dataset.name;
            const address = e.target.dataset.address;
            const phone = e.target.dataset.phone;
            const email = e.target.dataset.email;
            const website = e.target.dataset.website;
            const description = e.target.dataset.description;
            const image = e.target.dataset.image;
            
            // set map center to marker position
            map.setCenter({ lat: parseFloat(lat), lng: parseFloat(lng) });
            map.setZoom(19);

            // create new info window
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div class="info-window">
                        <div class="info-window__header">
                            <div class="info-window__header__image">
                                <img src="${image}" alt="${name}">
                            </div>
                            <div class="info-window__header__title">
                                <h2>${name}</h2>
                                <p>${address}</p>
                            </div>
                        </div>
                        <div class="info-window__body">
                            <div class="info-window__body__description">
                                <p>${description}</p>
                            </div>
                            <div class="info-window__body__contact">
                                <p><strong>Telefone:</strong> ${phone}</p>
                                <p><strong>E-mail:</strong> ${email}</p>
                                <p><strong>Site:</strong> ${website}</p>
                            </div>
                        </div>
                    </div>
                `,
            });

            // open info window
            infoWindow.open(map);
        });
    });

    

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
