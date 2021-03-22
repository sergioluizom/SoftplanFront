import { Routes } from '@angular/router';
import { ListaCountryComponent } from './country/list-country.component';
import { CountryComponent } from './country/country.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/countries', pathMatch: 'full'},    
    { path: 'country', component: CountryComponent },    
    { path: 'countries', component: ListaCountryComponent },
    { path: 'produto-detalhe/:id', component: ListaCountryComponent }
];