import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter] Increment');

// createAction('[Posts] Create Post', props<{post: Post}>())
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');