
import { Component } from '@angular/core';

@Component({
  selector: 'credit-card-payment-option',
  template: `
    <button (click)="onClickMe()">Credit card</button><br/><br/>

	<div *ngIf="appStatus === 'credit'">
	  <fieldset id="creditCardDetails">
	    <legend>Credit card details</legend>
	      <input type="text" name="credit_card_number" placeholder="Enter the Card Number" size= "40"><br/>
	      <input type="text" name="credit_card_name" placeholder="Enter the name on Card" size= "40"><br/>
	      <input type="date" name="credit_card_expiry" placeholder="Enter expiration date" size= "40"><br/>
	      <input type="text" name="credit_card_cvv" placeholder="Enter CVV" maxlength="3"><br/>
	      <br/>
	      <input type="button" value="Confirm">
	  </fieldset>
	</div>
    `
})
export class creditOptionComponent {
   

  onClickMe() {
    this.appStatus = 'credit';
    alert ("hiii" +this.appStatus);

    var x = document.getElementById('creditCardDetails');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
  }
}
