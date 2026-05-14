import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ExamApi } from '../../exam-api';
import { RouterLink } from '@angular/router';
import { Countries as CountriesInterface } from '../../models/countries.interface';

@Component({
  selector: 'app-countries',
  imports: [RouterLink],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries implements OnInit {
  constructor(public ExamAPI: ExamApi){}
  ngOnInit(){
    this.ExamAPI.getCountries();
  }
  getCountries(){
    this.ExamAPI.getCountries();
  }
}
