import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  registrarse() {
    this.router.navigate(['/registrar']);
  } 

  Iniciarsesion() {
    this.router.navigate(['/menu']);
  } 

  ngOnInit() {
  }

}
