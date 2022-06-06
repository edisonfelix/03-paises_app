import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  constructor() {}

  ngOnInit(): void {}

  buscar() {
    //console.log(this.termino);
    this.onEnter.emit(this.termino);
  }
}
