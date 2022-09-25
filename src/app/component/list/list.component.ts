import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sentence } from './sentence';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() 
  list: Sentence[] = [];
  
  @Output()
  touch = new EventEmitter<number>();

  constructor() { }

  itemIsClicked(n: number) {
    this.touch.emit(n);
  }

}
