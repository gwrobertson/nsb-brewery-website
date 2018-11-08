var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.370244, lng: -1.262716 },
        zoom: 7
    });

    // Array of markers
    var markers = [
        {
            coords: { lat: 53.471946, lng: -2.291686 },
            content: '<h4>Manchester</h4>'
        },
        {
            coords: { lat: 52.486244, lng: -1.890401 },
            content: '<h4>Birmingham</h4>'
        },
        {
            coords: { lat: 51.539188, lng: -0.142500 },
            content: '<h4>London</h4>'
        },
        {
            coords: { lat: 53.800755, lng: -1.549077 },
            content: '<h4>Leeds</h4>'
        },
    ];

    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
        });

        // Check for customicon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
        }

        marker.addListener('mouseover', function () {
            infoWindow.open(map, marker);
        });

        marker.addListener('mouseout', function () {
            infoWindow.close(map, marker);
        });

        marker.addListener('click', function () {
            map.setZoom(12);
            map.setCenter(marker.getPosition());
        });

        marker.addListener('dblclick', function () {
            map.setZoom(7);
            map.setCenter(marker.getPosition());
        });
    }

}


