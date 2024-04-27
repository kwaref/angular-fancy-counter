import { Component, Input } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  template: `
    <p class="count">{{count()}}</p>
  `,
  styles: ``
})
export class CountComponent {
  constructor(private counterService: CounterService) { }

  count() {
    return this.counterService.getCount();
  }
}
