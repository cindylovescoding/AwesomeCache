import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'coming-soon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})


export class  ComingSoonComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, protected _router: Router) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      console.log("Making api calls: /weatherforecast");
      this.forecasts = result;
    }, error => console.error(error));
  }


  private navigateTo(movieId: string) {
    console.log("Navigate to SuisideSquad Component");
      this._router.navigateByUrl(`movies/${movieId}`);
  }
}



interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
