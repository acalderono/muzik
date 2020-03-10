import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  @Input('catalogo') catalog = [];
  @Output() selectCatalogo = new EventEmitter<string>();
  catalogo: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCatalogo(catalogo: string) {
    this.selectCatalogo.emit(catalogo);
  }

}
