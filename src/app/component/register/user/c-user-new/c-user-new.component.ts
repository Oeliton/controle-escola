import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../component/register/user/m-user-reg/m-user-reg.module';
import { SHeaderRegService } from './../../../../component/template/header/s-header-reg.service';
import { Router } from '@angular/router'
import { SUserRegService } from '../../../../component/register/user/s-user-reg.service';

@Component({
  selector: 'app-c-user-new',
  templateUrl: './c-user-new.component.html',
  styleUrls: ['./c-user-new.component.css']
})
export class CUserNewComponent implements OnInit {

  userModel: UserModel = {
    name: '',
    usuario:'',
    senha: ''
  }

  constructor(private router: Router, private sSHeaderRegService: SHeaderRegService, private sUserRegService: SUserRegService) {
    sSHeaderRegService.headerData = {
      title: 'Cadastro de Usuário',
      icon: 'storefront',
      routeUrl: '/user'
    }
  }

  ngOnInit(): void {
  }

  navigateToUserCreate(): void {
    this.router.navigate(['/user/new'])
  }
  
  createUser(): void {
    this.sUserRegService.create(this.userModel).subscribe(() => {
      this.sUserRegService.showMessage('Usuário criado!')
      this.router.navigate(['/user/search'])
    })

  }

  cancel(): void {
    this.router.navigate(['/search'])
  }

}
