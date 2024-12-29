import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div class="flex flex-row min-h-screen justify-center">
    <div class="container px-4 py-2">
      <div class="bg-white w-full h-fit px-2 py-2 flex flex-col">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>`,
})
export class TodoComponent {}
