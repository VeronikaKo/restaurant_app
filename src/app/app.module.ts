import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ChoosetableComponent } from './choosetable/choosetable.component';
import { BookingComponent } from './booking/booking.component';
import { TableComponent } from './table/table.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { SignInComponent } from './sign-in/sign-in.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    routingComponents,
    AboutComponent,
    ChoosetableComponent,
    BookingComponent,
    TableComponent,
    AdminOrdersComponent,
    SignInComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
