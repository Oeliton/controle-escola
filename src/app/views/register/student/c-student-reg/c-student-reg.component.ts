import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {CStudentNewComponent} from './../../../../component/register/student/c-student-new/c-student-new.component'
import {CStudentSearchComponent} from './../../../../component/register/student/c-student-search/c-student-search.component'

@Component({
  selector: 'app-c-student-reg',
  templateUrl: './c-student-reg.component.html',
  styleUrls: ['./c-student-reg.component.css']
})
export class CStudentRegComponent implements OnInit {

  selected = new FormControl(0);
  //Passar informações do pai que é o views para os filhos que é componentes
  @ViewChild(CStudentNewComponent, {static: true}) newStudentData: CStudentNewComponent | undefined;
  @ViewChild(CStudentNewComponent, {static: true}) updateStudentData: CStudentNewComponent | undefined;
  @ViewChild(CStudentSearchComponent, {static: true}) searchStudentData: CStudentSearchComponent | undefined;

  constructor(private route: ActivatedRoute) { }

  emiteEvent(valor: string | undefined) {
    if(valor == 'alterar'){
      this.selected.setValue(0);
      //this.newStudentData?.setAlterStudent(this.searchStudentData?.searchNewStudent);
    }
    if(valor == 'atualizar'){
      //Alterar para encontrar o valor e substituir
      //this.searchStudentData?.substValues(this.newStudentData.studentUpdate);
      //this.searchStudentData?.find();
    }
  }

  ngOnInit(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null && id != undefined){
      if(Number(id) == 1){
        this.selected.setValue(1);
      }
    }
  } 

}
