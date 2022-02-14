import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiclesLocation } from 'src/types/vehiclesLocation';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) {}
  getVehicleLocation(userid:Number){
    return this.http.get<VehiclesLocation>('https://mobi.connectedcar360.net/api/?op=getlocations&userid=' + userid.toString());
  }
}