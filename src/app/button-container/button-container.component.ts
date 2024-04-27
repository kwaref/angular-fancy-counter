import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountButtonComponent } from '../count-button/count-button.component';

@Component({
  selector: 'app-button-container',
  standalone: true,
  imports: [CountButtonComponent],
  template: `
    <app-count-button class="count-btn" type="minus"/>
    <app-count-button class="count-btn" type="plus"/>
  `,
  styles: ``
})
export class ButtonContainerComponent { }
