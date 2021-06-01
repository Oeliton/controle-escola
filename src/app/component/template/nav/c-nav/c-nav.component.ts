import { Component, OnInit } from '@angular/core';
import {ArrayDataSource} from '@angular/cdk/collections';
import {NestedTreeControl} from '@angular/cdk/tree';
import { Router } from '@angular/router';

/*@Component({
  selector: 'app-c-nav',
  templateUrl: './c-nav.component.html',
  styleUrls: ['./c-nav.component.css']
})
export class CNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/


interface FoodNode {
  name: string;
  value:string;
  nameP:string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Cadastro', value: '', nameP: '',
    children: [
      {
        name: 'Alunos', value: '', nameP: '',
        children: [
          {name: 'Novo', value: '/student/reg', nameP: 'Alunos-',},
          {name: 'Pesquisa', value: '/student/reg/1', nameP: 'Alunos-'},
        ],
      },
      {
        name: 'Responsavel', value: '/Responsavel/reg', nameP: '',
        children: [
          {name: 'Novo', value: '/Responsavel/reg', nameP: 'Responsavel-'}
        ]
      },
      {
        name: 'Funcionarios', value: '/Funcionarios/reg', nameP: '',
        children: [
          {name: 'Novo', value: '/Funcionarios/reg', nameP: ''}
        ]
      },
      {
        name: 'Cliente fornecedor', value: '/Clientefornecedor/reg', nameP: '',
        children: [
          {name: 'Novo', value: '/Clientefornecedor/reg', nameP: ''}
        ]
      },
      {
        name: 'Empresa', value: '/Empresa/reg', nameP: '',
        children: [
          {name: 'Novo', value: '/Empresa/reg', nameP: ''}
        ]
      },
      {
        name: 'Usuario', value: '/user/reg', nameP: '',
        children: [
          {name: 'Novo', value: '/user/reg', nameP: '',},
          {name: 'Pesquisa', value: '/user/reg/1', nameP: ''},
        ]
      },
    ]
  },{
    name: 'Pedagógico', value: '', nameP: '',
    children: [
      {name: 'turmas', value: '', nameP: ''},
      {name: 'Pesquisa', value: '', nameP: ''},
    ]
  }
];

/*const TREE_DATA: FoodNode[] = [
  {
    name: 'Materia',
    children: [
      {name: 'Cadastro', value: 'cad'},
      {name: 'Pesquisa'},
    ]
  }, {
        name: 'Aluno',
        children: [
          {name: 'Cadastro'},
          {name: 'Pesquisa'},
        ]
      },
      {
        name: 'Usuario',
        children: [
          {
            name: 'Cadastro1',
            children: [
              {name: 'Cadastro2',
              children: [
                {name: 'Cadastro3',
                children: [
                  {name: 'Cadastro4',
                  children: [
                    {name: 'Cadastro5'},
                  ]},
                ]},
              ]},
            ]
          },{
            name: 'Pesquisa',
            children: [
              {name: 'Pesquisa'},
            ]
          }
    ]
  },
];*/

@Component({
  selector: 'app-c-nav',
  templateUrl: './c-nav.component.html',
  styleUrls: ['./c-nav.component.css']
})
export class CNavComponent implements OnInit {

  treeControl = new NestedTreeControl<FoodNode> (node => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  routerLink(values:string):void{
    if(values != ""){
      this.router.navigate([values]);
    }

  }

}