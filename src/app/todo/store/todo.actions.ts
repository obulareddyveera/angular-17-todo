import { createAction, props } from '@ngrx/store';
import { TodoEntity } from './todoState.interface';

export const addTodoSubject = createAction(
  '[Todo] addSubject',
  props<{todo: TodoEntity}>()
);
export const removeTodoSubject = createAction(
  '[Todo] removeSubject',
  props<{id: Number}>()
);
export const updateTodoSubject = createAction(
  '[Todo] updateSubject',
  props<{todo: TodoEntity}>()
);
export const handleTodoStatusChange = createAction(
  '[Todo] changeStatus',
  props<{id: Number, status: "Start" | "InProgress" | "Stop" | "Completed"}>()
);
