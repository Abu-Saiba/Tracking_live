class CarTracker {
    constructor() {
        this.map = null;
        this.carMarker = null;
        this.trackingInterval = null;
        this.carPosition = {
            lat: 51.505,
            lng: -0.09,
            speed: 0,
            direction: 0
        };

        this.initMap();
        this.initEventListeners();
    }

    initMap() {
        this.map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
        
        // Custom car icon
        const carIcon = L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25667.png',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });
        
        this.carMarker = L.marker([51.505, -0.09], {icon: carIcon}).addTo(this.map);
    }

    initEventListeners() {
        document.getElementById('startTracking').addEventListener('click', () => this.startTracking());
        document.getElementById('stopTracking').addEventListener('click', () => this.stopTracking());
    }

    startTracking() {
        if (!this.trackingInterval) {
            this.trackingInterval = setInterval(() => this.updatePosition(), 1000);
        }
    }

    stopTracking() {
        clearInterval(this.trackingInterval);
        this.trackingInterval = null;
    }

    updatePosition() {
        // Simulate position changes
        this.carPosition.lat += (Math.random() - 0.5) * 0.001;
        this.carPosition.lng += (Math.random() - 0.5) * 0.001;
        this.carPosition.speed = Math.random() * 100;
        this.carPosition.direction = Math.random() * 360;

        // Update marker position
        this.carMarker.setLatLng([this.carPosition.lat, this.carPosition.lng]);
        this.map.panTo([this.carPosition.lat, this.carPosition.lng]);

        // Update status display
        document.getElementById('latitude').textContent = this.carPosition.lat.toFixed(6);
        document.getElementById('longitude').textContent = this.carPosition.lng.toFixed(6);
        document.getElementById('speed').textContent = this.carPosition.speed.toFixed(2);
        document.getElementById('direction').textContent = this.carPosition.direction.toFixed(2);
    }
}

// Initialize tracker when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CarTracker();
});
  //Add Backend Integration
  const socket = new WebSocket('wss://your-server-endpoint');
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  this.updateRealPosition(data);
};

//Map Settings (in initMap()):
// Change initial position (latitude, longitude)
this.map.setView([NEW_LAT, NEW_LNG], ZOOM_LEVEL);

// Change map tiles provider
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(this.map);

//Car Marker:
// Change car icon (find another PNG URL)
iconUrl: 'https://example.com/new-car-icon.png'

// Change marker size
iconSize: [50, 50]  // [width, height]