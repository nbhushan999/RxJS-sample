import { Component, OnInit } from '@angular/core';
import { interval, take, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  constructor(private _design:DesignUtilityService) {}

  ngOnInit(): void {
    const source = interval(100);
    source.pipe(take(10),toArray()).subscribe(res=>{
      this._design.print(res,'elcontainer')
    })
  }
}
