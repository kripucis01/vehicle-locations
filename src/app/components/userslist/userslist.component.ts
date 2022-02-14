import { Component, OnInit } from '@angular/core';
import { VehicleOwnerService } from 'src/services/VehicleOwnerService';
import { VehiclesOwner } from 'src/types/vehiclesowner';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  public vehiclesOwners: VehiclesOwner = {data:[]};

   constructor(private service: VehicleOwnerService) {}
  ngOnInit(): void {
    this.service.getUserAndCarData().subscribe(result => {
      this.vehiclesOwners = result;
    }, error => console.error(error));
  }

}
