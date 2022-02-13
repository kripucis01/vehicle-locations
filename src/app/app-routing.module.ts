import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserslistComponent } from './components/userslist/userslist.component';
import { VehiclesTrackingComponent } from './components/vehiclestracking/vehiclestracking.component';

const routes: Routes = [
  { path: 'users', component: UserslistComponent },
  { path: 'vehiclestracking/:userid', component: VehiclesTrackingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
