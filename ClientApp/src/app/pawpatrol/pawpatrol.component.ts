import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'paw-patrol',
  templateUrl: './pawpatrol.component.html',
  styleUrls: ['./pawpatrol.component.css']
})


export class PawPatrolComponent {
  public result=null;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, protected _router: Router) {
      http.get(baseUrl + 'items/3').subscribe(result => {
        console.log("Making api calls, sql connected, result:/items/3", result);
        this.result = result;
      }, error => console.error(error));
    }

}

