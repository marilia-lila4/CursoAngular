import { CursoServise } from './curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component ({
    selector: 'app-curso-list',
    templateUrl: './curso-list.component.html'
})
export class CursoListComponent implements OnInit {

    filtroCursos: Curso[] = []; //o filtroCursos ficou na tag <tr *ngFor="let curso of cursos" > do HTML
    _cursos: Curso[] = [];
     
    _filtroPor: string; //O _ é uma forma de que quando outros usuários ver o código, vejam que essa variável é apenas para esse componente

    constructor(private cursoServise: CursoServise){}
    
    ngOnInit(): void {
        this._cursos = this.cursoServise.retrieveAll();
        this.filtroCursos = this._cursos;
    }

    set filtro(value: string) { // Quando for digitar pra procurar
        this._filtroPor = value;

        this.filtroCursos = this._cursos.filter((curso: Curso) => curso.name.toLocaleLowerCase().indexOf(this._filtroPor.toLocaleLowerCase()) > -1);
    }

    get filtro() { //Quando for atualizar o input do html
        return this._filtroPor;
    }


}