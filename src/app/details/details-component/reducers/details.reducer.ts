// import { LogEntry } from './../../models/log-entry';

// // counter.ts
// import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

// import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

// export const LOG_OPERATION = 'LOG_OPERATION';

// import * as fromRoot from '../../app.module';



// export interface State extends EntityState<LogEntry  > {
//   loading: boolean;
//   error: any;
// }

// export const adapter: EntityAdapter<LogEntry> = createEntityAdapter<LogEntry>({
//   sortComparer: null,
// });

// export interface UnsafeAction {
//     type: string;
//     payload?: any;
// }

// export const initialState: State = adapter.getInitialState({
//   loading: false,
//   error: false
// });

// export function detailsReducer(state: DetailsState = {operations: []}, action: UnsafeAction) {
//   switch (action.type) {
//     case LOG_OPERATION:
//       return {operations: state.concat([action.payload])};
//     default:
//       return state;
//   }

// }

// export const getDetailsState = createFeatureSelector<DetailsState>('details');

// export const getOperations = createSelector(
//     getDetailsState, (state: DetailsState) => state.operations
// );


