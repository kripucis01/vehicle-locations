import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/SharedService';
import { VehiclesOwner } from 'src/types/vehiclesowner.interface';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  public vehiclesOwners: VehiclesOwner = {data:[]};

   constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.getUserAndCarData().subscribe(result => {
      this.vehiclesOwners = result;
    }, error => console.error(error));
  }

}
