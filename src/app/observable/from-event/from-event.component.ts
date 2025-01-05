import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  constructor(private _design:DesignUtilityService) { }

  @ViewChild('addbtn') addbtn:ElementRef |any;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let count=1
    fromEvent(this.addbtn.nativeElement,'click').subscribe(res =>{
      let countVal=`Video${count++}`
      console.log(countVal)
      this._design.print(countVal,'elcontainer')
      this._design.print(countVal,'elcontainer2')

    })
  }

}
