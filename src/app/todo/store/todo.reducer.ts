import { createReducer, on } from '@ngrx/store';
import { TodoState } from './todoState.interface';
import {
  addTodoSubject,
  handleTodoStatusChange,
  removeTodoSubject,
  updateTodoSubject,
} from './todo.actions';

const initialState: TodoState = {
  todoList: [
    {
      id: new Date().getTime() + 10,
      subject: 'What todo ?',
      status: 'Start',
      rating: 1,
      createdOn: new Date(),
      modifiedOn: new Date(),
    },
    {
      id: new Date().getTime() + 20,
      subject: 'How todo ?',
      status: 'Start',
      rating: 1,
      createdOn: new Date(),
      modifiedOn: new Date(),
    },
    {
      id: new Date().getTime() + 30,
      subject: 'When todo ?',
      status: 'Start',
      rating: 1,
      createdOn: new Date(),
      modifiedOn: new Date(),
    },
  ],
  status: 0,
};

export const todoReducer = createReducer(
  initialState,
  on(addTodoSubject, (state, action) => {
    const todoListRef = [...state.todoList];
    todoListRef.push(action.todo);
    console.log('--== addTodoSubject ', todoListRef);
    return {
      todoList: todoListRef,
      status: 200,
    };
  }),
  on(updateTodoSubject, (state, action) => {
    const todoListRef = [...state.todoList];
    const selectedTodoItem = todoListRef.findIndex(
      (entity) => entity.id === action.todo.id
    );
    todoListRef[selectedTodoItem] = action.todo;
    return {
      todoList: todoListRef,
      status: 200,
    };
  }),
  on(removeTodoSubject, (state, action) => {
    const todoListRef = [...state.todoList];
    const result = todoListRef.filter((entity) => entity.id !== action.id);
    console.log("--==> removeTodoSubject ", result)
    return {
      todoList: result,
      status: 200,
    };
  }),
  on(handleTodoStatusChange, (state, action) => {
    const todoListRef = [...state.todoList];
    const selectedIndex = todoListRef.findIndex(
      (entity) => entity.id === action.id
    );
    
    const selectedTodoItem = todoListRef[selectedIndex]
    todoListRef.splice(selectedIndex, 1, {...selectedTodoItem, status: action.status});

    return {
      todoList: todoListRef,
      status: 200,
    };
  })
);
