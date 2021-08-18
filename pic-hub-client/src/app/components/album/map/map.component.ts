import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;

  constructor(public mapService: MapService) { }

  ngOnInit(): void {
  }
}
