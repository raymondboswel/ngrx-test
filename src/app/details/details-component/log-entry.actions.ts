import { LogEntry } from './../../models/log-entry';
import { Action } from '@ngrx/store';

export const LOG_OPERATION = 'LOG_OPERATION';

export class AddLogOperation implements Action {
  readonly type = LOG_OPERATION;

  constructor(public payload: {logEntry: LogEntry}) {}
}

export type Actions =
AddLogOperation;
