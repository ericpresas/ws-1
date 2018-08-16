(function () {
  google.maps.event.addDomListener(window, 'load', init);

var map;

function init() {
    var mapOptions = {
        center: new google.maps.LatLng(39.956333,-82.863579),
        zoom: 11,
            zoomControl: false,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
    {
      featureType: "landscape",
      stylers: [
        { saturation: -100 },
        { lightness: 65 },
        { visibility: "on" }
      ]
    },{
      featureType: "poi",
      stylers: [
        { saturation: -100 },
        { lightness: 51 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road.highway",
      stylers: [
        { saturation: -100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road.arterial",
      stylers: [
        { saturation: -100 },
        { lightness: 30 },
        { visibility: "on" }
      ]
    },{
      featureType: "road.local",
      stylers: [
        { saturation: -100 },
        { lightness: 40 },
        { visibility: "on" }
      ]
    },{
      featureType: "transit",
      stylers: [
        { saturation: -100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "administrative.province",
      stylers: [
        { visibility: "off" }
      ]
  /** /
    },{
      featureType: "administrative.locality",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "administrative.neighborhood",
      stylers: [
        { visibility: "on" }
      ]
  /**/
    },{
      featureType: "water",
      elementType: "labels",
      stylers: [
        { visibility: "on" },
        { lightness: -25 },
        { saturation: -100 }
      ]
    },{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { hue: "#ffff00" },
        { lightness: -25 },
        { saturation: -97 }
      ]
    }
  ],
    
    }

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
        ['East Main Street', 39.9548884, -82.8568701]
    ];

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            icon: '',
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });
    }
}  
})()
