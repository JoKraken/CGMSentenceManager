import {Action} from '@ngrx/store';
import { Sentence } from "../sentence/sentence";

export const initialState = [{
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


export const sentenceReducer = (state = initialState, action: Action) => {
  // return new state
  switch (action.type) {
    case 'GET_EVENT':
      return state;
    case 'UPDATE_EVENT':
      //state[action.payload.n] = action.payload;
      return state;
    default:
      return state;
  }
}
