import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { creditOptionComponent } from './creditCardPaymentMethod.component';
import { debitOptionComponent } from './debitCardPaymentMethod.component';
import { paypalOptionComponent } from './paypalPaymentMethod.component';

@NgModule({
  declarations: [AppComponent,creditOptionComponent, debitOptionComponent, paypalOptionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }