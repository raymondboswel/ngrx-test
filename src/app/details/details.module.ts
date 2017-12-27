import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { DetailsComponent } from './details-component/details.component';
import { reducers } from './details-component/reducers';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('details', reducers),
  ],
  providers: [],
})
export class DetailsModule { }
