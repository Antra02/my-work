
/**
import { Component } from '@angular/core';

@Component({
  selector: 'paypal-payment-option',
  template: `
    <button (click)="onClickMe()">Paypal</button><br/><br/>
    {{clickMessage}}`
})
export class paypalOptionComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You have selected payment payment option!';
  }
}
*/


import { Component } from '@angular/core';

@Component({
  selector: 'paypal-payment-option',
  template: `
    <button (click)="onClickMe()">Paypal</button><br/><br/>
    <div *ngIf="appStatus === 'paypal'">
	  <fieldset id="paypalDetails">
	    <legend>Paypal login details</legend>
	      <input type="text" name="account_email" placeholder="Enter Paypal id" size= "40"><br/>
	      <input type="text" name="account_id" placeholder="Enter password" size= "40"><br/>
	      <br/>
	      <input type="button" value="Login"> <p><a href="#" target="_blank"><em>Forgot password</em></a></p>
	  </fieldset>
	</div>
    `
})
export class paypalOptionComponent {
  

  onClickMe() {
	this.appStatus = 'paypal';
  }
}