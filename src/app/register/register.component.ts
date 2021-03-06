import { Component, OnInit } from '@angular/core';
import {User} from '../Models/user';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  users: User[] = [];
  url = 'http://localhost:4200/Games/api/user/register';

  constructor(private http: HttpClient, private router: Router){

  }
  clickedButton() {
    this.http.post(this.url, {username: this.username, password: this.password}, {responseType: 'text'}).subscribe(
      (data: any) => {
        this.router.navigate(['/login']);
      }, (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {

  }

}
