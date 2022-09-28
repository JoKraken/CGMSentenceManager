import { Component, EventEmitter, Input, Output } from '@angular/core';
<<<<<<< Updated upstream
import { Sentence } from './sentence';
=======
import { Sentence } from '../../sentence/sentence';
>>>>>>> Stashed changes

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
