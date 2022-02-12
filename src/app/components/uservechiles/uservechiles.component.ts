import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/services/SharedService';
import { Owner } from 'src/types/owner.interface';
import { Vehicles } from 'src/types/vehicles.interface';
import { VehiclesOwner } from 'src/types/vehiclesowner.interface';

@Component({
  selector: 'app-uservechiles',
  templateUrl: './uservechiles.component.html',
  styleUrls: ['./uservechiles.component.css']
})
export class UservechilesComponent implements OnInit {

  public vehiclesOwners: VehiclesOwner = {data:[]};
  public vehicles: Vehicles[] = [];
  public owner: String =  '';

   constructor(private sharedService: SharedService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.sharedService.getUserAndCarData().subscribe(result => {
      var selectedUserId = this.route.snapshot.paramMap.get('userid');
      this.vehiclesOwners = result;
      this.vehicles = this.vehiclesOwners?.data?.find(o => o['userid'] == selectedUserId)?.['vehicles'];
      this.owner = this.getOwnerName(selectedUserId!, this.vehiclesOwners);
    }, error => console.error(error));
  }

  getOwnerName(userid:string, vehiclesOwners: VehiclesOwner):string{

    return vehiclesOwners?.data?.find(o => o['userid'] == userid)?.['owner'].name + ' ' +
      vehiclesOwners?.data?.find(o => o['userid'] == userid)?.['owner'].surname;
  }
}
