import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  constructor() {}

  data: any;
  data1:any;

  users: any = [
    {
      name: 'rahul',
      skill: 'React',
      job: {
        grade: '1',
        experience: '1 year',
      },
    },
    {
      name: 'sukhvir',
      skill: 'ang',
      job: {
        grade: '2',
        experience: '2 year',
      },
    },
    {
      name: 'suny',
      skill: 'node',
      job: {
        grade: '3',
        experience: '3 year',
      },
    },
    {
      name: 'rahul1',
      skill: 'React1',
      job: {
        grade: '4',
        experience: '4 year',
      },
    },
    {
      name: 'rahul2',
      skill: 'React2',
      job: {
        grade: '5',
        experience: '5 year',
      },
    },
  ];

  ngOnInit(): void {
    // Ex-01
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => {
        this.data = res;
        console.log(res);
      });

    // Ex-02

    from(this.users)
      .pipe(pluck('job','experience'), toArray())
      .subscribe((res) => {
        this.data1 = res;
        console.log(res);
      });

  }
}
