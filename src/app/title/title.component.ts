import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="title">
      @if (locked) {
        <span>Limit! Buy <b>Pro</b> for &gt;5</span>
      } @else {
        Fancy Counter
      }
    </h1>
  `,
  styles: ``
})
export class TitleComponent {
  @Input() locked!: boolean;
}
