import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitAction() {
    this.router.navigate(['signup'])
  }

}
