import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { User } from "../user-detail/user";
//import { Observable } from "rxjs/Observable";
import  "rxjs/add/observable/of";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserResolver implements Resolve<User> {
 users:User[];
 selectedUser:User;

    constructor(){
        this.users = [
            { id:1, name:"Hao", age:2, title:"title1", location:"london"},
            { id:2, name:"Steve",age:2, title:"title2", location:"uckfield"},
            { id:3, name:"Howard",age:2, title:"title3", location:"shangdong"},
         ];
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User>{
        let id = +route.params['id'];
        if(isNaN(id)){
           console.log('id is not a number');
        }
        this.users.forEach(data => {
            if(data.id === id){
                this.selectedUser = data;
            }
        })
        return Observable.of(this.selectedUser);
    }
}