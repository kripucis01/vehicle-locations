import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VehicleOwnerService } from 'src/services/VehicleOwnerService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { MapComponent } from './components/map/map.component';
import { LocationService } from 'src/services/LocationService';
import { VehiclesTrackingComponent } from './components/vehiclestracking/vehiclestracking.component';
import { UserVehiclesComponent } from './components/uservechiles/uservehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    UserVehiclesComponent,
    MapComponent,
    VehiclesTrackingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [VehicleOwnerService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
