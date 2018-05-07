import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user-detail/user';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User;
  constructor(private route: ActivatedRoute) { 
    this.route.data.subscribe(data =>{
      this.user = data['user'];
    })
  }

  ngOnInit() {
  }

}
