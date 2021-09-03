import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jungle-cruise',
  templateUrl: './junglecruise.component.html',
  styleUrls: ['./junglecruise.component.css']
})


export class JungleCruiseComponent {
  public result=null;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, protected _router: Router) {
      http.get(baseUrl + 'items/1').subscribe(result => {
        console.log("Making api calls: /items/1, sql connected, result:", result);
        this.result = result;
      }, error => {
        this.result = undefined;
      console.error(error);
    });
    }

}

