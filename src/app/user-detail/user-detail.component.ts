import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users:User[];
  userDetail:User;
  idFromUrl:number;
  constructor(private router: ActivatedRoute) { 
  
  }

  ngOnInit() {
    this.users = [
       { id:1, name:"Hao", age:2, title:"title1", location:"london"},
       { id:2, name:"Steve",age:2, title:"title2", location:"uckfield"},
       { id:3, name:"Howard",age:2, title:"title3", location:"shangdong"},
    ];

    //let userId = this.router.snapshot.paramMap['id'];
    this.router.params.subscribe(param =>{
      this.idFromUrl = +param['id'];
      let name  = param['name'];
      let title  = param['title'];
      let location  = param['location'];
      console.log("---------------------------");
      console.log(this.idFromUrl);
      console.log(name);
      console.log(title);
      console.log(location);
      console.log("---------------------------");

      this.users.forEach(user =>{
        if(user.id=== this.idFromUrl){
          this.userDetail = user;
        }
      }
      )
    }    
    )
     
   // console.log("***********************")
    //this.router.navigate(["/welcome"]);
  }
}
