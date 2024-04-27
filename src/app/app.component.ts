import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private counterService: CounterService) { }
  title = 'fancy-counter';
  locked() {
    return this.counterService.isLocked();
  }
}
