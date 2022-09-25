import { Component, ElementRef, ViewChild } from '@angular/core';
import { Sentence } from './component/list/sentence';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CGMSentenceManager';

  sentenceToEdit: Sentence ={
    n: 1,
    s: 'Anna',
    v: 'is eating',
    o: 'a cookie'
   };

  sentenceList = [{
    n: 1,
    s: 'Anna',
    v: 'is eating',
    o: 'a cookie'
   } as Sentence,
   {
    n: 2,
    s: 'Henry',
    v: 'does',
    o: 'a handstand'
   } as Sentence,
   {
    n: 3,
    s: 'Sarah',
    o: 'a pen'
   } as Sentence,
   {
    n: 4,
    s: 'John',
    v: 'tells'
   } as Sentence,
   {
    n: 5,
    s: '',
    o: 'a drama'
   } as Sentence];

  constructor() { } 

  editSentences(event: number): void {
    this.showEditAlert(event);
  }

  showEditAlert(index: number): void {
    this.sentenceToEdit = this.sentenceList[index-1];
    document.getElementById('editAlert')!.style.display = 'block';
  }

  saveSentences(): void {
    document.getElementById('editAlert')!.style.display = 'none';
  }
   
}
