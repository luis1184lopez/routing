import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { CustomComponent } from './custom/custom.component';
import { DateComponent } from './date/date.component';
import { NumberComponent } from './number/number.component';
import { OrderComponent } from './order/order.component';
import {UpperLowerCaseComponent } from './upper-lower-case/upper-lower-case.component';

const routes: Routes = [
{ path: 'currency', component: CurrencyComponent },  
{ path: 'custom', component: CustomComponent },  
{ path: 'date', component: DateComponent },
{ path: 'number', component: NumberComponent },  
{ path: 'order', component: OrderComponent },  
{ path: 'upper-lower-case', component: UpperLowerCaseComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
