import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Countries } from '../countries/countries';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink, RouterOutlet, Countries],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
