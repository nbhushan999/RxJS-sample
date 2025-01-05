import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  operatorList: any = [
    { operatorName: 'FromEvent',operatorRoute: 'fromEvent' },
    { operatorName: 'Interval',operatorRoute: 'interval' },
    { operatorName: 'Of-From',operatorRoute: 'of-from' },
    { operatorName: 'ToArray',operatorRoute: 'toArray' },
    { operatorName: 'CustomObservable' ,operatorRoute: 'customobservable'},
    { operatorName: 'Map' ,operatorRoute: 'map'},
    { operatorName: 'Pluck' ,operatorRoute: 'pluck'},
    { operatorName: 'FromEvent' ,operatorRoute: 'fromEvent'},
    { operatorName: 'FromEvent' ,operatorRoute: 'fromEvent'},

  ];
}
