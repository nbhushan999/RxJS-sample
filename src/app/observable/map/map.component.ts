import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription, take, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private _design:DesignUtilityService) { }

  //Subscription
  sub1:Subscription |any;
  sub2:Subscription |any;

  //Message
  msg:any;
  msg2:any;

  ngOnInit(): void {
    const ob=interval(1000)

    // Ex-01
    this.sub1=ob.pipe(map(data => 'video'+data)).subscribe(res=>{
      this.msg=res
    })

    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);


    // Ex-02
    this.sub2=ob.pipe(map(data => 3*data)).subscribe(res=>{
      this.msg2=res
    })

    setTimeout(() => {
      this.sub2.unsubscribe()
    }, 10000);

    // Ex-03
    const mem=from([
    {name:'rahul',age:'23'},
    {name:'sukh',age:'23'},
    {name:'ra',age:'23'},
    {name:'vishal',age:'23'},
    {name:'sunny',age:'23'},
    {name:'vaish',age:'23'}])
    
    mem.pipe(map(data=>data.name)).subscribe(res=>{
      this._design.print(res,'elcontainer')
    })

  }

}
