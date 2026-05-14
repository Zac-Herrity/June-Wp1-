import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Countries } from './components/countries/countries';

export const routes: Routes = [
    {path: '', component: Countries},
    {path: 'about', component: About}
];
