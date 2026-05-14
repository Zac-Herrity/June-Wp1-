import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { About } from './components/about/about';
import { Countries } from './components/countries/countries';

@Component({
  selector: 'app-root',
  imports: [About, Countries, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('June-Wp1');
}
