import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from './_helpers/must-match'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  
  RegisterForm:any=FormGroup;
   submitted = false;

  constructor( private fb : FormBuilder) {}

  ngOnInit(): void {
    // this.RegisterForm = new FormGroup({
    //   Name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    //   ]),
    //   username: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(''),
    //   ]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(
    //       '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
    //     ),
    //   ]),
    //   confirmpassword: new FormControl('', [Validators.required]),
    // });
    this.RegisterForm=this.fb.group({
      Name : ['', [Validators.required]],
      email : ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
      username : ['', [Validators.required,Validators.pattern('^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$')]],
      password : ['', [Validators.required,Validators.pattern('')]],
      confirmpassword : ['',[Validators.required]]
    },{
        validator : MustMatch('password','confirmpassword')
      }
    );
  }

  

  get user() {
    console.log(this.RegisterForm.controls);
    return this.RegisterForm.controls;
  }

  onSubmit(){
      this.submitted = true;
      
      
      if(this.RegisterForm.invalid){
         return;
      }

      alert('Welcome in our Website');
  }
}
