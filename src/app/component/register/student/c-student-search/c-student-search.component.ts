import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Student } from './../m-student-reg/m-student-reg.module';
import { SStudentRegService } from './../s-student-reg.service';
import { MatTableDataSource } from '@angular/material/table';
//import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-c-student-search',
  templateUrl: './c-student-search.component.html',
  styleUrls: ['./c-student-search.component.css']
})
export class CStudentSearchComponent implements OnInit, OnChanges{

  //Recebe a pesquisa para apresentar no html
  //studentDataSource: Student[] = [];
  studentDataSource!: MatTableDataSource<Student>;
  //Dados selecionados para alteração
  searchNewStudent!: Student;
  //Recebe o valor que foi criado recentemente para adicionar na lista de pesquisa
  @Input() newStudentData: any;
  @Input() updateStudentData: any;
  //Dados que são apresentados no HTML
  displayedColumns = ['id', 'nome', 'cpf', 'sexo', 'email', 'celular', 'fone', 'action']

  //Evento
  @Output() event = new EventEmitter();

  constructor(private studentService: SStudentRegService) { }

  ngOnInit(): void {
    //this.studentDataSource = ELEMENT_DATA;
    this.find();
  }

  public find(): void{
    this.studentService.read().subscribe(student => {
      this.studentDataSource = new  MatTableDataSource(student);
    })
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.newStudentData && this.newStudentData)  {
      this.studentDataSource.data.push(this.newStudentData);
      this.studentDataSource._updateChangeSubscription();
    }
    if (changes.updateStudentData && this.updateStudentData)  {
      this.substValues(this.updateStudentData);
      this.studentDataSource._updateChangeSubscription();
    }
  }

  editar(row: Student):void{
    //this.searchNewStudent = {...row};
    //Passa informações copiando
    //this.searchNewStudent = Object.assign({},row)
    this.searchNewStudent = {...row};
    this.event.emit('alterar');
    
    /*this.studentService.update(row).subscribe(() => {
      this.studentService.showMessage("Produto atualizado com sucesso!");
    });*/
  }

  deletar(row: Student):void{
    this.studentService.delete(Number(row.id)).subscribe(() => {
      this.studentService.showMessage("Produto excluido com sucesso!");
    });
  }

  substValues(values: Student):void{
    this.studentDataSource.data.filter(function( obj ) {  return obj.id == values.id;});
    //var i = this.studentDataSource.data.indexOf(this.studentDataSource.data.filter((item) =>  item.id == 1)[0],0);

    for (let index = 0; index < this.studentDataSource.data.length; index++) {
      if(this.studentDataSource.data[index].id == values.id){
        this.studentDataSource.data[index].nome = values.nome;
        this.studentDataSource.data[index].cpf = values.cpf;
        this.studentDataSource.data[index].sexo = values.sexo;
        this.studentDataSource.data[index].dtnascimento = values.dtnascimento;
        this.studentDataSource.data[index].estado_civil = values.estado_civil;
        this.studentDataSource.data[index].email = values.email;
        this.studentDataSource.data[index].fone = values.fone;
        this.studentDataSource.data[index].celular = values.celular;
        break;
      }
    }
    this.clean(values);
  }

  clean(values: any){
    values.id = 0;
    values.nome = "";
    values.cpf = "";
    values.sexo = "";
    values.dtnascimento = "";
    values.estado_civil = "";
    values.email = "";
    values.fone = "";
    values.celular = "";
  }
}
