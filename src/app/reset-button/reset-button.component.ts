import { Component, EventEmitter, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { radixReset } from "@ng-icons/radix-icons";
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-reset-button',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ radixReset })],
  template: `
    <button (click)="reset()">
      <ng-icon size="40px" class="reset-btn-icon" name="radixReset"/>
    </button>
  `,
  styles: ``
})
export class ResetButtonComponent {
  constructor(private counterService: CounterService) { }

  reset() {
    this.counterService.reset();
  }
}
