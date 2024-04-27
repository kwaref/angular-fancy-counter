import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { radixMinus, radixPlus } from '@ng-icons/radix-icons';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-count-button',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ radixMinus, radixPlus })],
  template: `
    <button (click)="onClick()" [disabled]="locked()">
      @if (type === 'minus') {
        <ng-icon size="40px" class="count-btn-icon" name="radixMinus" />
      } @else if (type === 'plus') {
        <ng-icon size="40px" class="count-btn-icon" name="radixPlus" />
      }
    </button>
  `,
  styles: ``
})
export class CountButtonComponent {
  constructor(private counterService: CounterService) { }

  @Input() type!: string;
  
  locked() {
    return this.counterService.isLocked();
  }

  onClick() {
    if (this.type === 'minus') {
      this.counterService.decrement();
    } else {
      this.counterService.increment();
    }
  }
}
