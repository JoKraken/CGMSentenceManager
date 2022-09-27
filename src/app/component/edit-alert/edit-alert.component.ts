import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sentence } from '../list/sentence';

@Component({
  selector: 'edit-alert',
  templateUrl: './edit-alert.component.html',
  styleUrls: ['./edit-alert.component.css']
})
export class EditAlertComponent {
  @Input()
  sentenceToEdit!: Sentence;

  @Output()
  edit = new EventEmitter<Sentence>();

  constructor() {}

  save(): void {
    this.edit.emit(this.sentenceToEdit);
  }

  cancel(): void {
    this.edit.emit();
  }

}
