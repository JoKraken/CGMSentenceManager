import { Component, Input, OnInit } from '@angular/core';
import { Sentence } from './sentence';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() 
  list: Sentence[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
