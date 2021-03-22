import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ListaCountryComponent } from './country/list-country.component';
import { CountryComponent } from './country/country.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'country', component: CountryComponent },    
    { path: 'countries', component: ListaCountryComponent },
    { path: 'produto-detalhe/:id', component: ListaCountryComponent }
];