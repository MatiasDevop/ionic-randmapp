import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("https://rickandmortyapi.com/api/character")
        .subscribe(res => {
          console.log(res);
        })
  }

}
