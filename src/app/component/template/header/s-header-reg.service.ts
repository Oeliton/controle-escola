import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './../header/m-header-reg/m-header-reg.module';

@Injectable({
  providedIn: 'root'
})
export class SHeaderRegService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })
  
  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
