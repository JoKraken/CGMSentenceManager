import { Component } from '@angular/core';
import { Sentence } from './sentence/sentence';
import {Store} from "@ngrx/store";
import {AppState} from "./app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CGMSentenceManager';

  sentenceToEdit: Sentence = {
    n: 0,
    s: '',
    v: '',
    o: ''
   };
<<<<<<< Updated upstream
=======
  sentenceList: Sentence[] = [];
>>>>>>> Stashed changes

  sentenceListDefault = [{
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

<<<<<<< Updated upstream
  constructor() { }
=======
  constructor(private store: Store<AppState>) {
    this.store.select('sentenceReducer').subscribe(value => {
      this.sentenceList = value;
    });
  }
>>>>>>> Stashed changes

  editSentences(index: number): void {
    this.showEditAlert(index);
  }

  showEditAlert(index: number): void {
    this.sentenceToEdit = new Sentence(this.sentenceList[index-1]);
    document.getElementById('editAlert')!.style.display = 'block';
  }

  saveSentences(sentence: Sentence): void {
    if(sentence != undefined)
      this.sentenceList[sentence.n-1] = sentence;
    document.getElementById('editAlert')!.style.display = 'none';
  }

}
