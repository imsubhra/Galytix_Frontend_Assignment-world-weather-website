import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-table',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit  {
  title = 'weather website';
  data: any;
  constructor(private http: HttpClient) { }
    ngOnInit() {
      this.http.get<any>('https://restcountries.com/v2/all').subscribe(data => {
        console.log(data);
        this.data = data;
      })
    }
}