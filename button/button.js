import { LightningElement, track, api } from "lwc";
import getAmountContacts from "@salesforce/apex/Button.getAmountContacts";

export default class ApexWireMethodToProperty extends LightningElement {
  @api recordId;
  @track count;

  handleLoad() {
    getAmountContacts({ str: this.recordId }).then(result => {
      console.log(result);
      this.count = result;
    });
  }
}