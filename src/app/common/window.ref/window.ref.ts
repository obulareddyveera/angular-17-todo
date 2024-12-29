import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken('Window', {
  factory: () => {
    return typeof window !== 'undefined' ? window : {};
  },
});
