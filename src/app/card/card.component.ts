import { Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CountComponent } from '../count/count.component';
import { ButtonContainerComponent } from '../button-container/button-container.component';
import { ResetButtonComponent } from '../reset-button/reset-button.component';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TitleComponent, CountComponent, ButtonContainerComponent, ResetButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private counterService: CounterService) { }

  locked() {
    return this.counterService.isLocked();
  }
}
