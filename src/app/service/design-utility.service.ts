import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private fs:Firestore) { }

  print(data:any,containerId:string){
    // console.log(data)
    let el=document.createElement('li')
    el.innerText=data

    document.getElementById(containerId)?.appendChild(el)
  }
}
