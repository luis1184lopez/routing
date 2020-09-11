import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { UpperLowerCaseComponent } from './upper-lower-case/upper-lower-case.component';
import { NumberComponent } from './number/number.component';
import { DateComponent } from './date/date.component';
import { OrderComponent } from './order/order.component';
import { CustomComponent } from './custom/custom.component';
import { FormsModule } from '@angular/forms'
import { ReverseString } from './custom/reverse-string.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    UpperLowerCaseComponent,
    NumberComponent,
    DateComponent,
    OrderComponent,
    CustomComponent,
    ReverseString 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
