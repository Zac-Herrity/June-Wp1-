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
    this._http.get<any[]>(this.apiUrl).subscribe((data) =>{
      this.countries.set(data);
      console.log(this.countries);
    });
  }
}
