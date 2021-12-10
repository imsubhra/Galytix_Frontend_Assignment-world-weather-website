import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit  {
  title = 'weather website';
  data: any;
  temp: any;
  description: any;
  constructor(private http: HttpClient, private router: Router) { }
    ngOnInit() {
      this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${this.router.url.substring(1)}&APPID=d2a275d88b57868267129e94ff1d89b0
      `).subscribe(data => {
        console.log(data);
        this.data = data;
        this.temp = (data.main.temp - 273).toFixed(1);
      })
    }
}