import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'coming-soon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})


export class  ComingSoonComponent {
  public items: TodoItemDTO[] = null;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, protected _router: Router) {
    http.get<TodoItemDTO[]>(baseUrl + 'items').subscribe(result => {
      console.log("Making api calls with sql connections: /items, result:", result );
      this.items = result;
    }, error => console.error(error));
  }


  private navigateTo(movieId: string) {
    console.log("Navigate to movie:", movieId);
      this._router.navigateByUrl(`movies/${movieId}`);
  }
}


interface TodoItemDTO
{
  id: number;
  name: string;
  isComplete: boolean
}
