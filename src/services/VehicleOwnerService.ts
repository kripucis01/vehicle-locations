import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiclesLocation } from 'src/types/vehiclesLocation';

@Injectable()
export class VehicleOwnerService {
  constructor(private http: HttpClient) {}

  getUserAndCarData(){
    return this.http.get<VehiclesLocation>('http://mobi.connectedcar360.net/api/?op=list');
  }
}