import { Component, Input, OnInit } from '@angular/core';
import View from 'ol/View';
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile';
import Feature from 'ol/Feature';
import Geometry from 'ol/geom/Geometry';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import XyzSource from 'ol/source/XYZ';
import { UserVehicle } from 'src/types/uservehicles';
import { LocationService } from 'src/services/LocationService';
import { VehiclesLocation } from 'src/types/vehiclesLocation';
import {Icon, Style} from 'ol/style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: Map;
  vectorSource: VectorSource<Geometry>;
  vectorLayer: VectorLayer<VectorSource<Geometry>>;
  xyzSource: XyzSource;
  tileLayer: TileLayer<XyzSource>;
  view: View;
  marker: Feature<Geometry>;
  markers: Feature<Geometry>[] = [];
  vehiclesLocation: VehiclesLocation;
  style: Style;
  
  @Input() userVehicle: UserVehicle;

  constructor(private service: LocationService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(){
    this.service.getVehicleLocation(this.userVehicle.userId).subscribe(result => {
      this.vehiclesLocation = result;
      debugger;
      this.setMarkers();
      this.setVehiclesMidpoint();
      this.setSources();
      this.setLayers();
      this.showLocation();
    }, error => console.error(error));
  }
  
  private setMarkers() {
      for(var i = 0; i < this.vehiclesLocation.data.length; i++)
      {
        var vehiclesLocation = this.vehiclesLocation.data[i];
        if(this.latAndLonIsNumbers(vehiclesLocation.lat, vehiclesLocation.lon))
        {
          var feature = new Feature({
            geometry: new Point(fromLonLat([Number(vehiclesLocation.lon), Number(vehiclesLocation.lat)])),
          });

          //this.setMarkerStyle(feature, i);
          this.markers.push(feature);

        }
    };
  }

  private setMarkerStyle(feature: Feature<Point>, i: number) {
    feature.setStyle(new Style({
      image: new Icon({
        color: this.userVehicle.vehicles[i].color,
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        crossOrigin: 'anonymous',
        opacity: 0.75,
        src: 'data/dot.png'
      })
    }));
  }

  private setVehiclesMidpoint() {
    var lonSum : number = 0;
    var latSum : number = 0;
    var count = 0;
    this.vehiclesLocation.data.forEach(o => {
      if(this.latAndLonIsNumbers(o.lat, o.lon))
      {
        lonSum += o.lon;
        latSum += o.lat;
        count++;
      }
    })
    
    this.view = new View({
      center: fromLonLat([lonSum/count, latSum/count]),
      zoom: 14
    });
  }

  private setSources() {
    this.vectorSource = new VectorSource({
      features: this.markers,
    });

    this.xyzSource = new XyzSource({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });
  }

  private setLayers() {
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
    });

    this.tileLayer = new TileLayer({
      source: this.xyzSource
    });
  }

  private showLocation(){
    this.map = new Map({
      target: 'ol-map',
      layers: [this.tileLayer, this.vectorLayer],
      view: this.view
    });
  }

  private latAndLonIsNumbers(lat:any, lon:any) {
    if(!isNaN(lat) && !isNaN(lon) && lat != null && lon != null)
      return true;
    return false;
  }
}