import { Component } from '@angular/core';

@Component({
  selector: 'debit-card-payment-option',
  template: `
    <button (click)="onClickMe()">Debit card</button><br/><br/>
    <div *ngIf="appStatus === 'debit'">
	  <fieldset id="debitCardDetails">
	    <legend>Debit card details</legend>
	      <input type="text" name="debit_card_number" placeholder="Enter the Card Number" size= "40"><br/>
	      <input type="text" name="debit_card_name" placeholder="Enter the name on Card" size= "40"><br/>
	      <input type="date" name="debit_card_expiry" placeholder="Enter expiration date" size= "40"><br/>
	      <input type="text" name="debit_card_cvv" placeholder="Enter CVV" maxlength="3"><br/>
	      <br/>
	      <input type="button" value="Confirm">
	  </fieldset>
	</div>

    `
})
export class debitOptionComponent {
  

  onClickMe() {
    this.appStatus = 'debit';
  }
}
