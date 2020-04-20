import { Component } from '@angular/core';
import { Address } from 'symbol-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  run() {
    console.log('run');
    const address =  Address.createFromRawAddress('TAV7RH-6LSQJA-Q44CJX-GJADCL-UU6EBR-SSYHNP-VX7U');
    console.log(`address: ${address.plain()}`);
  }
}
