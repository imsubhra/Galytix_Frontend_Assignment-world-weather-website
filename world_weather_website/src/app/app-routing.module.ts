import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: ':q', component: WeatherComponent },
  { path: '', component: CountryComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
