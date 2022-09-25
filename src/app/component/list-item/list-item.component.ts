import { Component, Input, OnInit } from '@angular/core';
import { Sentence } from '../list/sentence';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input()
  sentence!: Sentence;

  constructor() { }

  ngOnInit(): void {
  }

  getTooltip(): string {
    var tooltip = '';
    if(this.sentence.s) tooltip += 'S ';
    if(this.sentence.v) tooltip += 'V ';
    if(this.sentence.o) tooltip += 'O ';

    return tooltip;
  }

}
