import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  searchUserName:string = "hao";
  searchUserTitle:string = "senior developer";
  searchUserLocation:string = "london";
  constructor() { }

  ngOnInit() {
  }

}
