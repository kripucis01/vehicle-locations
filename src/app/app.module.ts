import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from 'src/services/SharedService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UservechilesComponent } from './components/uservechiles/uservechiles.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    UservechilesComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
