import { Component, OnInit } from '@angular/core';
import { SHeaderRegService } from './../s-header-reg.service';
import { HeaderData } from './../m-header-reg/m-header-reg.module';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.css']
})
export class CHeaderComponent implements OnInit {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor(private sHeaderRegService: SHeaderRegService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.sHeaderRegService.headerData.title
  }

  get icon(): string {
    return this.sHeaderRegService.headerData.icon
  }

  get routeUrl(): string {
    return this.sHeaderRegService.headerData.routeUrl
  }

}
