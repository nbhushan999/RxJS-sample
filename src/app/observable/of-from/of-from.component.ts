import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private _design:DesignUtilityService) { }

  ngOnInit(): void {
    // OF
    const ob=of('rahul','sukhvir','sunny')
    ob.subscribe(res=>{
      this._design.print(res,'elcontainer')
    })

    // From Array
    const ob1=from(['rahul','sukhvir','sunny'])
    ob1.subscribe(res=>{
      console.log(res)
       this._design.print(res, 'elcontainer1');
    })

    //From Promise

    const promise= new Promise((resolve)=>{
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 3000);
    })
    const ob2=from(promise)

    ob2.subscribe(res=>{
      console.log(res)
       this._design.print(res, 'elcontainer2');
    })

     //From String

    const ob3=from('Welcome to rxjs')

    ob3.subscribe(res=>{
      console.log(res)
       this._design.print(res, 'elcontainer3');
    })
  }

}
