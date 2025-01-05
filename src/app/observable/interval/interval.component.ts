import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  constructor(private _design:DesignUtilityService) { }

  videoSubscription:Subscription | any;
  obMsg:string="";

  ngOnInit(): void {
    const videos=interval(1000);
    this.videoSubscription=videos.subscribe(res=>{
      this.obMsg=`Video${res}`;
      this._design.print(this.obMsg,'elcontainer1')
      this._design.print(this.obMsg,'elcontainer2')
      this._design.print(this.obMsg,'elcontainer3')
      if(res>=5){
        this.videoSubscription.unsubscribe()
      }
    })
  }

}
