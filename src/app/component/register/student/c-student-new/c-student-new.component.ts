import { Component, Input, OnInit, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import {Student} from "../../student/m-student-reg/m-student-reg.module";
import {SHeaderRegService} from "./../../../../component/template/header/s-header-reg.service";
import {SStudentRegService} from "./../../../../component/register/student/s-student-reg.service";


@Component({
  selector: 'app-c-student-new',
  templateUrl: './c-student-new.component.html',
  styleUrls: ['./c-student-new.component.css']
})
export class CStudentNewComponent implements OnInit, OnChanges{

  //Recebe valor para adicionar na pesquisa
  studentModelSave: any;
  //Armazena dados atualizados
  studentUpdate: any;
  //Recebe valor para alteração
  @Input() searchStudentData: any;

  @Output() eventNew = new EventEmitter();

  studentModel: Student = {
    nome:'',
    cpf:'',
    sexo:'',
    dtnascimento:'',
    estado_civil:'',
    email:'',
    fone:'',
    celular:'',
  }
  
  constructor(private sHeaderRegService: SHeaderRegService, private sStudentRegService: SStudentRegService) {
    sHeaderRegService.headerData = {
      title: 'Cadastro de Estudante',
      icon: 'storefront',
      routeUrl: '/student'
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchStudentData && this.searchStudentData)  {
      this.studentModel = this.searchStudentData;
    }
  }
  

  create(): void {
    if(this.studentModel.id == undefined || Number(this.studentModel.id) <= 0){
      this.insert();
    }else{
      this.update();
    }
    this.cancel();
  }

  public cancel(): void {
    this.studentModel.id = 0;
    this.studentModel.nome = '';
    this.studentModel.cpf = '';
    this.studentModel.sexo = '';
    this.studentModel.dtnascimento = '';
    this.studentModel.estado_civil = '';
    this.studentModel.email = '';
    this.studentModel.fone = '';
    this.studentModel.celular = '';
  }

  insert():void{
    this.sStudentRegService.create(this.studentModel).subscribe((res) => {
      this.sStudentRegService.showMessage('Estudante criado!')
      this.studentModelSave = {...res};
      this.cancel();
    })
  }

  update():void{
    //console.log(this.searchStudentData);
    this.sStudentRegService.update(this.searchStudentData).subscribe((res) => {
      this.sStudentRegService.showMessage("Estudante atualizado com sucesso!");
      //this.studentUpdate = Object.assign({},this.searchStudentData);
      //this.studentUpdate = {...this.searchStudentData};
      this.studentUpdate = {...res};
      this.eventNew.emit('atualizar');
    });
  }

}
