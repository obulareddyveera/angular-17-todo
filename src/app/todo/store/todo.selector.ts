import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../appState.interface';

export const selectFeature = (state: AppStateInterface) => state.todo;

export const getTodoList = createSelector(selectFeature, (state) => {
  console.log('--== getTodoList :: Selector ', state);
  return state.todoList;
});

export const getTodoActionStatus = createSelector(selectFeature, (state) => {
    console.log('--== getTodoActionStatus :: Selector ', state);
    return state.status;
  });
