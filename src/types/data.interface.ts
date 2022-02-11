import { Owner } from "./owner.interface";
import { Vehicles } from "./vehicles.interface";
import { VehiclesOwner } from "./vehiclesowner.interface";

export interface Data {
    userid: number;
    owner: Owner;
    vehicles: Vehicles[];
  }

