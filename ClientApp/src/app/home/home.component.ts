import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  public result=null;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, protected _router: Router) {
    http.get<string>(baseUrl + 'portfolio').subscribe(result => {
      this.result = result;
      console.log("making api calls: /portfolio, non-sql , result:", this.result);
    }, error => console.error(error));
  }


  private navigateTo(movieId: string) {
      this._router.navigateByUrl(`movies/${movieId}`);
  }
}
