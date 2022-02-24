
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: new google.maps.LatLng(23.874813, 90.385773),
        disableDefaultUI: true,
        styles: [
            {
                elementType: 'labels',
                stylers: [{
                    visibility: 'on'
                }]
            },
            {
                elementType: 'geometry',
                stylers: [{
                    color: '#ECE3E0'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#999999'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#ECE3E0'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#ECE3E0'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#ECE3E0'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#46bcec'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { "visibility": "off" }
                ]
            }
        ]
    });
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(23.874813, 90.385773),
        map: map,
        icon: 'assets/img/icon/marker-1.png',
        animation: google.maps.Animation.BOUNCE,
    });
}