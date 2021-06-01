import { Component, OnInit } from '@angular/core';
import { SHeaderRegService } from './../../../component/template/header/s-header-reg.service';

@Component({
  selector: 'app-c-home',
  templateUrl: './c-home.component.html',
  styleUrls: ['./c-home.component.css']
})
export class CHomeComponent implements OnInit {

  constructor(private sHeaderRegService: SHeaderRegService) {
    sHeaderRegService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
