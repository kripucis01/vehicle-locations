import { Owner } from "./owner.interface";
import { Vehicles } from "./vehicles.interface";

export interface Data {
    userid: number;
    owner: Owner;
    vehicles: Vehicles[];
  }

