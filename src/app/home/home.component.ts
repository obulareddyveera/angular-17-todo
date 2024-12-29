import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-row min-h-screen justify-center items-center">
      <div class="bg-white w-2/3 h-1/4 px-4 py-6">
        <div class="grid grid-cols-3 gap-4">
          <a
            href="/counter"
            class="btn bg-blue-500 hover:bg-blue-600 shadow-md rounded-md text-white px-4 py-2 text-center"
            >Counter Assignment</a
          >
          <a
            href="/todo/home"
            class="btn bg-green-500 hover:bg-green-600 shadow-md rounded-md text-white px-4 py-2 text-center"
            >Todo Assignment</a
          >
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
