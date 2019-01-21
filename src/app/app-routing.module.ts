import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ChoosetableComponent } from './choosetable/choosetable.component'
const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'about', component: AboutComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'choosetable', component: ChoosetableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MenuComponent,AboutComponent,BookingComponent,ChoosetableComponent]
