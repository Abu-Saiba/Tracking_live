
// Replace this:
this.carPosition.lat += (Math.random() - 0.5) * 0.001;
this.carPosition.lng += (Math.random() - 0.5) * 0.001;

// With actual GPS data (example):
this.carPosition.lat = realData.latitude;
this.carPosition.lng = realData.longitude;

//Browser Geolocation (for testing):"

navigator.geolocation.watchPosition((position) => {
    this.carPosition.lat = position.coords.latitude;
    this.carPosition.lng = position.coords.longitude;
  });