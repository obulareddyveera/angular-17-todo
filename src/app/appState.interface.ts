import { CounterStateInterface } from "./counter/store/couterState.interface";
import { TodoState } from "./todo/store/todoState.interface";


export interface AppStateInterface {
    counter: CounterStateInterface;
    todo: TodoState
}