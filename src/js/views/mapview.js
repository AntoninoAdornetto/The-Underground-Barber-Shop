import View from './appview.js';

class MapView extends View {
  _parentElement = document.getElementById('mapid');
  map;

  _handleEventRender(handle) {
    return window.addEventListener('load', handle);
  }

  _loadLocationMap(position) {
    this.map = L.map(this._parentElement).setView(position, 25);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Gx5jvuqw8EakI6gDFZ6G', {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        'pk.eyJ1IjoibWlkbmlnaHR4Y3J1aXNlIiwiYSI6ImNrczJzNzBnMzA2bWsycHJ6emFncHhwYjcifQ.wv9KHbdv5gEZDT664K7T1A',
    }).addTo(this.map);
    const marker = L.marker(position).addTo(this.map);
    marker.bindPopup(
      `
                <p class="leaflet__text">The Underground Barber Shop</p>
                <p class="leaflet__text">150 N 8th ST STE 111</p>
                <p class="leaflet__text">Boise, ID 83702</p>
                <a class="leaflet__anchor" href="https://www.google.com/search?q=the+underground+barber+shop+boise+idaho" target="_blank">Directions</a>
            `
    );
  }
}

export default new MapView();
