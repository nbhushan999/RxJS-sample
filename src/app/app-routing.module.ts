import { Component, ENVIRONMENT_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromEvent } from 'rxjs';
import { AllComponent } from './observable/all/all.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {
    path:'promise',
    component:PromiseComponent
  },
  {
    path:'Observable',
    component:ObservableComponent,
    children:[
      {path:'',component:AllComponent},
      {path:'fromEvent',component:FromEventComponent},
      {path:'interval',component:IntervalComponent},
      {path:'of-from',component:OfFromComponent},
      {path:'toArray',component:ToArrayComponent},
      {path:'customobservable',component:CustomObservableComponent},
      {path:'map',component:MapComponent},
      {path:'pluck',component:PluckComponent}



    ]
  },
  {
    path:"**",
    component:PromiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
