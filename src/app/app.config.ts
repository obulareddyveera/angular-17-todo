import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { counterReducer } from './counter/store/counter.reducer';

import { routes } from './app.routes';
import { WINDOW } from './common/window.ref/window.ref';
import { todoReducer } from './todo/store/todo.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore({counter: counterReducer, todo: todoReducer}),
    provideHttpClient(),
    { provide: WINDOW, useFactory: () => typeof window !== 'undefined' ? window : {} },
  ]
};
