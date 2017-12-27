
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromDetails from './reducers/index';
import { Dictionary } from '@ngrx/entity/src/models';
import { LogEntry } from '../../models/log-entry';
@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponent implements OnInit {
  operations: LogEntry[];
  constructor(private store: Store<fromDetails.DetailsState>) { }

  ngOnInit() {
    this.store.select(fromDetails.getAllLogEntry).subscribe(ops => {
      console.log(ops);
      this.operations = ops;

    });
  }

}
