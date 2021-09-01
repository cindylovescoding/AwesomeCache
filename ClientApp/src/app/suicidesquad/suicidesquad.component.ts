import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'suicide-squad',
  templateUrl: './suicidesquad.component.html',
  styleUrls: ['./suicidesquad.component.css']
})


export class  SuicideSquadComponent {
  public result=null;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, protected _router: Router) {
    http.get(baseUrl + 'items/2').subscribe(result => {
      console.log("Making api calls: /items/2");
      this.result = result;
    }, error => console.error(error));
  }

  private navigateTo(movieId: string) {
    console.log("Navigate to SuisideSquad Component");
      this._router.navigateByUrl(`movies/${movieId}`);
  }
}

