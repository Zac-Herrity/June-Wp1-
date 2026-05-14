import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ExamApi } from '../../exam-api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-countries',
  imports: [],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries implements OnInit {
  constructor(public ExamAPI: ExamApi){}
  ngOnInit(){
    this.ExamAPI.getCountries();
  }
}
