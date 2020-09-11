import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-lower-case',
  templateUrl: './upper-lower-case.component.html',
  styleUrls: ['./upper-lower-case.component.css']
})
export class UpperLowerCaseComponent implements OnInit {
Frase:string;
  constructor() { }

  ngOnInit(): void {
  }

}
