import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from 'src/types/data.interface';
import { VehiclesOwner } from 'src/types/vehiclesowner.interface';

@Injectable()
export class SharedService {
  constructor(private http: HttpClient) {}

  getUserAndCarData(){
    return this.http.get<VehiclesOwner>('http://mobi.connectedcar360.net/api/?op=list');
  }
}