var map = L.map('map').setView([41.48036, -71.3106], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiam9yYWhoaCIsImEiOiJjbDEzYjJtcmYycTQ4M29rYmllMTN1b2hlIn0.X4Y6n0r8SdZkqcZ_EkZTug'
}).addTo(map);

const customIcon = L.icon({
    iconUrl: 'icon-location.svg',
    iconSize: [66, 88],
    iconAnchor: [22, 94],
});
L.marker([41.48036, -71.3106], {icon: customIcon}).addTo(map);

L.control.scale().addTo(map);

map.zoomControl.setPosition('bottomright');