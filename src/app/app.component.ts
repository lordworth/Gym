import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gym';

  loginStatus: String=null;

  constructor() {
  }

  ngOnInit() {
    // this.loginStatus = localStorage.getItem('loggedIn');
    
  }


}
