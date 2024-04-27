import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _count = 0;

  constructor() { }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  get locked(): boolean {
    return this.count === 5;
  }

  getCount() {
    return this.count;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  isLocked() {
    return this.locked;
  }
}
