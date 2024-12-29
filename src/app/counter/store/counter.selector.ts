import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../appState.interface";

export const selectFeature = (state: AppStateInterface) => state.counter;

export const getCounter = createSelector(
    selectFeature, 
    (state) => {
        console.log("--== getCounter :: Selector ", state)
        return state.count
    }
);