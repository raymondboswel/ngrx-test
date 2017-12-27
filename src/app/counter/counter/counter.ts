import { RANDOM_SEED_SUCCESS } from './counter.actions';

// counter.ts
import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../app.module';
import { INCREMENT, DECREMENT, RESET } from './counter.actions';
import { UnsafeAction } from '../../details/details-component/reducers/log-entry.reducer';

export interface State {
  count: number;
}

export function counterReducer(state: number = 0, action: UnsafeAction) {
  console.log('Received action:' + action.type);
  console.log('State:' + state);
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return  state - 1;

    case RESET:
      return 0;

    case RANDOM_SEED_SUCCESS:
    return action.payload;

    default:
      return state;
  }

}

// export const selectCounterState = (state: State) => state.count;

export const getCounterState = createFeatureSelector<State>('counter');

export const getCount = createSelector(
  getCounterState, (state) => state.count
);
