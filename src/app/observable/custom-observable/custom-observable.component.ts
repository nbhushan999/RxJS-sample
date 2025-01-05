import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit {
  constructor(private _design: DesignUtilityService) {}

  templateClass: any = '';
  templateClass2: any = '';
  templateClass3: any = '';

  name:any
  ngOnInit(): void {


    const obs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('React');
      }, 2000);

      setTimeout(() => {
        observer.next('Typescript');
        observer.error(new Error('limit exceed'));
      }, 3000);

      setTimeout(() => {
        observer.next('Html and css');
        observer.complete();
      }, 4000);


    });

    obs1.subscribe(
      (res: any) => {
        // console.log(res);
        this._design.print(res, 'elcontainer');
      },
      (error: any) => {
        // console.log(error);
        this.templateClass = 'error';
      },
      () => {
        this.templateClass = 'completed';
      }
    );

    // Ex(02)

    const arr=['Angular', 'Typescript', 'CSS', 'HTML', 'React']
    const obs2=Observable.create((observer:any)=>{
      let count=0  
      setInterval(()=>{
          observer.next(arr[count])

          // if(count==3){
          //   observer.error('error')
          // }
          if(count>=4){
            observer.complete()
          }
          count++
        },1000)
    })

    obs2.subscribe((res:any)=>{
      console.log(res)
      this._design.print(res,'elcontainer2')
    },(error:any)=>{
      this.templateClass2 = 'error';
    },()=>{
      this.templateClass2 = 'completed';
    })


    // Ex-03 Random names

    const arr1=['Rahul','sukhvir','Sunny']
    const obs3=Observable.create((observer:any)=>{
      let count=0  
      setInterval(()=>{
          observer.next(arr1[count])

          if(count==1){
            observer.error('error')
          }
          if(count>2){
            observer.complete()
          }
          count++
        },1000)
    })

    obs3.subscribe((res:any)=>{
      console.log(res)
     this.name=res
    },(error:any)=>{
      this.templateClass3 = 'error';
    },()=>{
      this.templateClass3 = 'completed';
    })
    
  }
}
