import { Component, OnInit } from '@angular/core';

import { CountryService } from '../_services/country.service';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html'
})
export class ListaCountryComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  public countries: Country[];

  ngOnInit() {
    this.countryService.getCountries()
      .subscribe(
        result => {          
          console.log(result);
          this.countries = result;
        },
        error => console.log(error)
      );
  }
}
