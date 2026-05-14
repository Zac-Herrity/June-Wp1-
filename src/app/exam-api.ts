import { Injectable } from '@angular/core';
import { Countries } from './models/countries.interface';
import { inject } from '@angular/core';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExamApi {
  private apiUrl = 'environment.apiUrl';
  private _http = inject(HttpClient);
  countries = signal<Countries[]>([]);

  getCountries(){
    this._http.get<Countries[]>(this.apiUrl).subscribe((data) =>{
      this.countries.set(data);
    })
    };
  }
  //Getting HTTPErrorResponse & Routes not working :D

