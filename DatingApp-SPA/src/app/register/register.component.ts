import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
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
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model)
      .subscribe(() => {console.log('registeration successfull')},error => {console.log('registeration failed')});
    
    console.log('register');
  }
  cancel(){
    this.cancelRegister.emit(false);
    console.log('register cancel');
  }

}
