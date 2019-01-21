import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ChoosetableComponent } from './choosetable/choosetable.component';
import { BookingComponent } from './booking/booking.component';
import { TableComponent } from './table/table.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    routingComponents,
    AboutComponent,
    ChoosetableComponent,
    BookingComponent,
    TableComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
