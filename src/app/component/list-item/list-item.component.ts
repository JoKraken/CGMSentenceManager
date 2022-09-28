import { Component, Input } from '@angular/core';
<<<<<<< Updated upstream
import { Sentence } from '../list/sentence';
=======
import { Sentence } from '../../sentence/sentence';
>>>>>>> Stashed changes

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input()
  sentence!: Sentence;

  constructor() { }

  getTooltip(): string {
    var tooltip = '';
    if(this.sentence) {
      if(this.sentence.s) tooltip += 'S ';
      if(this.sentence.v) tooltip += 'V ';
      if(this.sentence.o) tooltip += 'O ';
    }

    return tooltip;
  }

}
