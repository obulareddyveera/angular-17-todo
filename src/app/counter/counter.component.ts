import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';
import { CommonModule } from '@angular/common';
import { AppStateInterface } from '../appState.interface';
import { getCounter } from './store/counter.selector';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-row min-h-screen justify-center items-center">
      <div
        class="bg-white w-1/2 h-1/4 px-4 py-6 flex flex-col gap-4 items-center justify-center"
      >
        <div>Counter -- {{ count$ | async }}</div>
        <div class="flex gap-3">
          <button
            class="btn rounded-lg shadow-lg bg-blue-500 text-white px-4 py-2 hover:bg-blue-300"
            (click)="increment()"
          >
            Increment
          </button>
          <button
            class="btn rounded-lg shadow-lg bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-300"
            (click)="decrement()"
          >
            Decrement
          </button>
          <button
            class="btn rounded-lg shadow-lg bg-red-500 text-white px-4 py-2 hover:bg-red-300"
            (click)="reset()"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CounterComponent {
  private readonly store:Store<AppStateInterface> = inject(Store);
  readonly count$: Observable<Number> = this.store.select(getCounter);

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
