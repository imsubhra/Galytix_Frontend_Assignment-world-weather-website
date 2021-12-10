import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'world_weather_website';
  data: any;

    constructor(private http: HttpClient) { }
      ngOnInit() {
        this.http.get<any>('https://restcountries.eu/rest/v2/all').subscribe(data => {
          console.log(data);
              this.data = data;
          })
      }
  }