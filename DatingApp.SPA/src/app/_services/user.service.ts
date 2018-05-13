import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";


@Injectable()
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: Http) { }

  getUsers(): Observable<User[]>{
    return this.http.get(this.baseUrl + 'users', this.jwt())
      .map(response => <User[]>response.json())
      .catch(this.handleError);
  }

  private jwt(){
    let token = localStorage.getItem('token');
    if(token){
      let headers =  new Headers({
        'Authorization': 'Bearer' + token
      })
      headers.append('Content-Type','application/json');
      return new RequestOptions({headers: headers});
    }
  }

  private handleError(error: any) {
    const applicationError = error.headers.get("Application-Error");
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    console.log(error.json());
    const serverError = error.json();
    let modelStateError = "";
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateError += serverError[key] + "\n";
        }
      }
    }
    return Observable.throw(modelStateError || "Server error");
  }
}
