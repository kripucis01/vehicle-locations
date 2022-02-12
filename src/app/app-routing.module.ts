import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UservechilesComponent } from './components/uservechiles/uservechiles.component';

const routes: Routes = [
  { path: 'users', component: UserslistComponent },
  { path: 'uservechiles/:userid', component: UservechilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
