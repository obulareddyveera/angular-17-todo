import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, inject, Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../appState.interface';
import { addTodoSubject } from '../store/todo.actions';
import { TodoEntity } from '../store/todoState.interface';
import { getTodoActionStatus } from '../store/todo.selector';

@Component({
  selector: 'app-add-edit-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="onSubmit()">
      <div class="w-full flex justify-center">
        <p  class="text-xl font-serif">--- Add|Edit : Todo ---</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="md:w-2/3 w-full flex flex-col">
          <div class="text-md font-mono text-slate-600">Subject</div>
          <input
            type="text"
            class="border-b-2 border-slate-400 px-4 py-2"
            formControlName="subject"
          />
        </div>
        <div class="md:w-2/3 w-full flex flex-col">
          <div class="text-md font-mono text-slate-600">Status</div>
          <select
            class="py-2 border-b-2 border-slate-400"
            formControlName="status"
          >
            <option></option>
            <option value="Start">Start</option>
            <option value="InProgress">InProgress</option>
            <option value="Stop">Stop</option>
            <option value="Completed">Completed</option>
          </select>
          <div *ngIf="todoForm.get('status')?.errors?.['status']">Status is required</div>
        </div>
        <div class="w-full flex md:justify-end justify-between gap-6">
          <a
            class="btn bg-gray-500 hover:bg-gray-600 shadow-md rounded-md px-3 py-2 text-white"
            routerLink="/todo/"
          >
            Cancel
          </a>
          <button
            class="btn bg-green-500 hover:bg-green-600 shadow-md rounded-md px-3 py-2 text-white disabled:bg-slate-200"
            type="submit"
            [disabled]="todoForm.invalid"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  `,
  styles: ``,
})
export class AddEditTodoComponent {
  private readonly store: Store<AppStateInterface> = inject(Store);
  todoForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      subject: ['', Validators.required],
      status: ['', [Validators.required]],
    });
    this.store.select(getTodoActionStatus).subscribe((status) => {
      if (status === 200) {
        // this.router.navigate(['/todo/home']);
        this.router.navigate(["todo"]);
      }
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const { value } = this.todoForm;
      console.log('Form submitted:', this.todoForm.value);
      const todoRecord: TodoEntity = {
        id: new Date().getTime() + 1,
        subject: value.subject,
        status: value.status,
        rating: 0,
        createdOn: new Date(),
        modifiedOn: new Date(),
      };
      this.store.dispatch(addTodoSubject({ todo: todoRecord }));
    }
  }
}
