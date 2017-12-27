import { LogEntry } from '../../../models/log-entry';

// counter.ts
import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

import * as fromRoot from '../../../app.module';

import * as LogEntryActions from '../log-entry.actions';

import * as fromDetails from './index';

// tslint:disable-next-line:no-empty-interface
export interface State extends EntityState<LogEntry> {
    // tslint:disable-next-line:no-trailing-whitespace
    
  }

export const adapter: EntityAdapter<LogEntry> = createEntityAdapter<LogEntry>({
  sortComparer: false,
});

export interface UnsafeAction {
    type: string;
    payload?: any;
}

const defaultEntries = {
  ids: [],
  entities: {

  }
};


export const initialState: State = adapter.getInitialState(defaultEntries);

export function reducer(state: State = initialState, action: LogEntryActions.Actions): State {
  console.log(state);
  switch (action.type) {
      case LogEntryActions.LOG_OPERATION:
        return adapter.addOne(action.payload.logEntry, state);

      default:
      return state;
  }
}



