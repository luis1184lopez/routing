import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
Fecha= new Date(1984, 10, 20);
  constructor() { }

  ngOnInit(): void {
  }

}
