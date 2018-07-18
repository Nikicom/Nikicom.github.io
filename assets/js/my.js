


// Initialize and add the map
function initMap() {
    // The location of DCI
    var DCI = {lat: 51.2139854, lng: 6.7885347};
    // The map, centered at DCI
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 4, center: DCI
});
    // The marker, positioned at DCI
    var marker = new google.maps.Marker({position: DCI
, map: map});
  }

