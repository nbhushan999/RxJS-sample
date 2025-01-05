import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { map, mergeMap, Observable, Subscription, toArray } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor(private fs:Firestore) { }
  
  data:any
  // data!: Observable<[]>;
  // data:Subscription | undefined

  ngOnInit(): void {
   this.getUser().pipe(map((data:any)=>{data.sort((a:any, b:any) => {
        return parseInt(a.grade) < parseInt(b.grade) ? -1 : 1;
      });
    return data})).subscribe(res=>{
      this.data=res
      console.log(res)
    })
    // this.data.pipe(toArray(),map((data) => {
    //   data.sort((a:any, b:any) => {
    //     return a.grade < b.grade ? -1 : 1;
    //   });
    //   return data;
    // }))

  }

  getUser():Observable<[]>{
    let user=collection(this.fs,'user')
    console.log(collectionData(user,{idField:'id'}) as Observable<[]>)
    return collectionData(user,{idField:'id'}) as Observable<[]>
  }

}
