import { Component, Input, OnInit } from '@angular/core';
import { Vehicles } from 'src/types/vehicles';

@Component({
  selector: 'app-uservehicles',
  templateUrl: './uservehicles.component.html',
  styleUrls: ['./uservehicles.component.css'],
})
export class UserVehiclesComponent implements OnInit {

  @Input() vehicles: Vehicles[];
  @Input() owner: String;

  constructor() {}
  ngOnInit(): void {
  }
}
