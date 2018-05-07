import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name:string;
  title:string;
  location:string;
  constructor(private router: ActivatedRoute ) { }

  ngOnInit() {
    this.name =  this.router.snapshot.params['name'];
    this.title =  this.router.snapshot.params['title']
    this.location =  this.router.snapshot.params['location']
    console.log("---------------------------");
    console.log(this.name);
    console.log(this.title);
    console.log(this.location);
    console.log("---------------------------");
    }    

}
