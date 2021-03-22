import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../model/country';


@Injectable()
export class CountryService {

constructor(private http: HttpClient) { }
    getCountries() : Observable<Country[]> {     
        return this.http
        .get<Country[]>(environment.routeApi + "/Country");
    }
}