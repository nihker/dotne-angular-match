import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { User } from "../_models/User";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import { Injectable } from "@angular/core";

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
        return this.userService.getUsers().catch(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate['/home'];
            return Observable.of(null);
        });
    }
}