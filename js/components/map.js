
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export var Mapbox = function(container, style, center, zoom = 6, delay = 700) {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlYmx1ZWdlbmUiLCJhIjoiY2pjZTBnNjhrMW95MTJ5cDU3NnFrZXRhbCJ9.r23vVQa5-wm9rFImX1aJdw';
    this.delay = delay;
    this.map = new mapboxgl.Map({
        container: container,
        style: style,
        interactive: false,
        center: center,
        zoom: zoom
    });
};

Mapbox.prototype.addFeatures = function (cityData) {
    var that = this;
    if (cityData.hasOwnProperty('features')) {
        cityData.features.forEach(function(marker) {
            var el = document.createElement('div');
            el.className="marker marker--" + cityData.region;
            el.dataset.place = marker.properties.data;
            el.style.width = marker.properties.iconSize[0] + 'px';
            el.style.height = marker.properties.iconSize[1] + 'px';
            el.style.display = 'none';
        
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(that.map);
        });
    }
};

Mapbox.prototype.flyTo = function(coords, zoom, $fadeOutEl = null, $fadeInEl = null) {
    if($fadeOutEl && $fadeInEl) {
        $fadeOutEl.fadeOut(function(){
            $fadeInEl.fadeIn();
        });
    }

    this.map.flyTo({
        center: coords,
        zoom: zoom
    });
    
};

