import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/SharedService';
import { Data } from 'src/types/data.interface';
import { VehiclesOwner } from 'src/types/vehiclesowner.interface';


@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  public vehiclesOwners: VehiclesOwner = {data:[]};

   constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.getUserAndCarData().subscribe(result => {
      this.vehiclesOwners = result;
    }, error => console.error(error));
  }

}
