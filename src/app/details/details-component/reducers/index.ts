import * as fromLogEntry from './log-entry.reducer';
import * as fromRoot from '../../../app.module';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface DetailsState {
    logEntries: fromLogEntry.State;
  }

  export interface State extends fromRoot.State {
    details: DetailsState;
  }

  export const reducers = {
    logEntries: fromLogEntry.reducer,
  };

export const getDetailsState = createFeatureSelector<DetailsState>('details');

export const getOperationsState = createSelector(
    getDetailsState, (state: DetailsState) => state.logEntries
);

export const {
    selectIds: getLogEntryIds,
    selectEntities: getLogEntryEntities,
    selectAll: getAllLogEntry,
    selectTotal: getTotalLogEntries,
  } = fromLogEntry.adapter.getSelectors(getOperationsState);

