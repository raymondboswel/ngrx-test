import { LogEntry } from './../../models/log-entry';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET, RANDOM_SEED } from './counter.actions';
import { getCount } from './counter';
import * as fromCounter from './counter';
import { LOG_OPERATION, AddLogOperation } from '../../details/details-component/log-entry.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number;
  constructor(private store: Store<fromCounter.State>) {
    store.select(fromCounter.getCount).subscribe((count: number) => {
      console.log(count);
      this.counter = count;
    });
  }
  createlogEntry(entry: string) {
    const logEntry: LogEntry = {
      id: new Date().getUTCMilliseconds().toString(),
      title: 'operation',
      entry: entry
    };
    this.store.dispatch(new AddLogOperation({logEntry: logEntry}));
  }

  increment() {
    this.createlogEntry('Inc');
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.createlogEntry('Dec');
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.createlogEntry('RESET');
    this.store.dispatch({ type: RESET });
  }

  getSeed() {
    this.store.dispatch({type: RANDOM_SEED});
  }

}
