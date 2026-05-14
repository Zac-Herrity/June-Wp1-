import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ExamApi } from '../../exam-api';
import { RouterLink } from '@angular/router';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-countries',
  imports: [RouterLink, NgClass],
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
