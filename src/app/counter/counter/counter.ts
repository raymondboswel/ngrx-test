
// counter.ts
import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../app.module';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface State extends fromRoot.State {
  count: number;
}

export function counterReducer(state: number = 0, action: Action) {
  console.log('Received action:' + action.type);
  console.log('State:' + state);
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return  state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }

}

// export const selectCounterState = (state: State) => state.count;

export const getCounterState = createFeatureSelector<State>('counter');

export const getCount = createSelector(
  getCounterState, (state) => state.count
);
