import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleOwnerService } from 'src/services/VehicleOwnerService';
import { UserVehicle } from 'src/types/uservehicles';
import { Vehicles } from 'src/types/vehicles';
import { VehiclesOwner } from 'src/types/vehiclesowner';

@Component({
  selector: 'app-vehiclestracking',
  templateUrl: './vehiclestracking.component.html',
  styleUrls: ['./vehiclestracking.component.css'],
  template: '<app-map></app-map>',
})
export class VehiclesTrackingComponent implements OnInit {

  public vehiclesOwners: VehiclesOwner = {data:[]};
  public vehicles: Vehicles[];
  public owner: String =  '';
  public userVehicle: UserVehicle;
  constructor(private service: VehicleOwnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getUserAndCarData().subscribe(result => {
      var selectedUserId = this.route.snapshot.paramMap.get('userid');
      this.vehiclesOwners = result;
      this.vehicles = this.vehiclesOwners?.data?.find(o => o['userid'] == selectedUserId)?.['vehicles'];
      this.setUserVehicle(selectedUserId);
      this.setOwnerName(selectedUserId!, this.vehiclesOwners);
    }, error => console.error(error));
  }

  private setUserVehicle(selectedUserId: string | null) {
    this.userVehicle = new UserVehicle();
    this.userVehicle.userId = Number(selectedUserId);
    this.userVehicle.vehicles = this.vehicles;
  }

  setOwnerName(userid:string, vehiclesOwners: VehiclesOwner){
    let owner = vehiclesOwners?.data?.find(o => o['userid'] == userid)?.['owner'];
    this.owner = owner.name + ' ' + owner.surname;
  }
}
