import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../appState.interface';
import { Observable } from 'rxjs';
import { TodoEntity, TodoState } from '../store/todoState.interface';
import { getTodoList } from '../store/todo.selector';
import { CommonModule } from '@angular/common';
import {
  handleTodoStatusChange,
  removeTodoSubject,
} from '../store/todo.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-view',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  template: `
    <div class="flex flex-col gap-6">
      <div class="flex justify-end gap-4">
        <button
          class="btn bg-green-500 hover:bg-green-600 shadow-md rounded-md px-3 py-2 text-white"
          routerLink="/todo/new"
        >
          Add
        </button>
      </div>
      <div
        class="overflow-x-auto mb-10"
        *ngIf="todoListStoreD$ | async as todoListData"
      >
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Subject
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Rating
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Last Updated
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            @for (todo of todoListData; track todo.id) {
            <tr class="odd:bg-gray-50">
              <td
                class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center"
              >
                {{ todo.subject }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                {{ todo.status }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                {{ todo.rating }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                {{ todo.modifiedOn.toLocaleDateString('en-US') }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <div class="w-full flex justify-center">
                  <select
                    class="w-full py-2 border-b-2 border-slate-400"
                    [(ngModel)]="todo.status"
                    (ngModelChange)="handleStatusChange(todo.id, $event)"
                  >
                    <option></option>
                    <option value="Start">Start</option>
                    <option value="InProgress">InProgress</option>
                    <option value="Stop">Stop</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </td>
              <td>
                <div class="flex justify-center">
                  <button
                    class="btn bg-transparent text-sm text-green-500 hover:text-green-600 px-4 py-2"
                    (click)="deleteTodoEntity(todo.id)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            } @empty {
            <tr>
              <td
                [colSpan]="5"
                class="whitespace-nowrap px-6 py-4 text-gray-700 text-center"
              >
                Start adding things ToDo ...!
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class TodoViewComponent {
  private store: Store<AppStateInterface> = inject(Store);
  todoListStoreD$: Observable<TodoEntity[]> = this.store.select(getTodoList);

  constructor(private router: Router) {

  }

  deleteTodoEntity = (id: number) => {
    this.store.dispatch(removeTodoSubject({ id }));
  };

  handleStatusChange = (
    id: number,
    status: 'Start' | 'InProgress' | 'Stop' | 'Completed'
  ) => {
    console.log('--==> handleStatusChange ', id, status);
    this.store.dispatch(handleTodoStatusChange({ id, status }));
  };
}
