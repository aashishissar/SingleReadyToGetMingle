import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';
import { error } from 'protractor';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login()
  {
    this.authService.login(this.model).subscribe(next =>{
    this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error(error);
    });
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
  loggedOut(){
   localStorage.removeItem('token');
   this.alertify.success('log out');
  }

}
