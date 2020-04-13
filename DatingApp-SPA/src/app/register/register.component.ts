import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { error } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   model: any = {};
   @Output() cancelRegister = new EventEmitter();
   @Input() valuesFromHome: any;
  constructor(private authService: AuthService,private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model)
      .subscribe(() => {
        this.alertify.success('registeration successfull')
      },error =>
      {
        this.alertify.error(error)
      });
    }

  cancel(){
    this.cancelRegister.emit(false);
    this.alertify.error('register cancel');
  }

}
