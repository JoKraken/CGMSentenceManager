import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sentence } from '../list/sentence';

@Component({
  selector: 'edit-alert',
  templateUrl: './edit-alert.component.html',
  styleUrls: ['./edit-alert.component.css']
})
export class EditAlertComponent {
  @Input()
  sentence!: Sentence;
  
  @Output()
  edit = new EventEmitter();

  constructor() { }

  save(){
    this.edit.emit();
  }

}
