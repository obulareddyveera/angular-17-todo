import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WINDOW } from './common/window.ref/window.ref';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="w-screen h-scree bg-slate-200">
      @if (windowUrl !== "/") {
      <div class="w-full flex px-4 py-4">
        <a
          href="/"
          class="btn bg-orange-500 hover:bg-orange-600 shadow-md rounded-md text-white px-4 py-2"
          >Back</a
        >
      </div>
      }

      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'todo-ngrx-project';
  windowUrl: string;

  constructor(@Inject(WINDOW) private window: any) {
    this.windowUrl = this.window.location.pathname;
  }
}
