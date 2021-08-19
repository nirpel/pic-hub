import { EventEmitter, Injectable } from '@angular/core';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  lat: number;
  lng: number;
  locationChanged: EventEmitter<Location> = new EventEmitter();

  constructor() { }

  initMap(location: Location = null) {
    if (location) {
      this.lat = location.lat;
      this.lng = location.lng;
    } else {
      this.getCurrentLocation();
    }
  }

  private getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }

  onMapReady(map) {
    map.addListener('click', (e) => {
      this.setLocation(e.latLng);
    })
  }

  setLocation(location) {
    this.lat = location.lat();
    this.lng = location.lng();
    this.locationChanged.emit({ lat: this.lat, lng: this.lng });
  }
}
