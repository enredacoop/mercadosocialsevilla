var map = L.map('map').
    setView([37.32, -5.95], 12);

// OFFICIAL http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
// OFFICIAL more info: http://{s}.tile.osm.org/{z}/{x}/{y}.png
// BASIC http://{s}.acetate.geoiq.com/tiles/acetate/{z}/{x}/{y}.png
// GEOGRAPHIC: http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png
// http://{s}.tile.cloudmade.com/9067860284bc491e92d2342cc51d47d9/998/256/{z}/{x}/{y}.png

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 10,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
    color: '#006600',
    fillColor: '#080'
};

L.geoJson(sevilla, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
})
.on('click', function(d) {
    $('#name-breadcrumb').text(d.layer.feature.properties.name);
    $('#name').html(d.layer.feature.properties.name);
    $('#des').text(d.layer.feature.properties.des);
    $('#cat').text(d.layer.feature.properties.cat);
    $('#direccion').html("<span class='glyphicon glyphicon-map-marker'></span> " + d.layer.feature.properties.dire + " - " + d.layer.feature.properties.localidad + " (" + d.layer.feature.properties.provincia + ")");
    $('#phone').text(d.layer.feature.properties.phone);
    $('#url').html("<a href='" + d.layer.feature.properties.url + "' target='_blank'>" + d.layer.feature.properties.url + "</a>");
    $('#mail').html("<a href='mailto:" + d.layer.feature.properties.mail + "' target='_blank'>" + d.layer.feature.properties.mail + "</a>");
    $('#time').text(d.layer.feature.properties.time);
    $('#content-box').show();
})
.addTo(map);

$('#close').click(function() {
    $('#content-box').hide();
});