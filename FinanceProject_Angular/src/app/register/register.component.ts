import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../objects/user/user';
import { Router } from '@angular/router';
import { UserService } from '../objects/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentForm: FormGroup;
  user: User = new User();
  submitted = false;
  list: User[] = [];

  formErrors = {
    _id: {
      message: '',
      show: false
    },
    uName: {
      message: '',
      show: false
    },
    fName: {
      message: '',
      show: false
    },
    lName: {
      message: '',
      show: false
    },
    pass: {
      message: '',
      show: false
    }
  };

  validationMessages = {
    _id: {

    },
    userId: {
      required: 'UserId required.',
      matchFound: 'UserId already in use.'
    },
    fName: {
      required: 'First Name required.'
    },
    lName: {
      required: 'Last Name required.'
    },
    password: {
      required: 'Password required.',
      pattern: 'Password must have 1 lowercase, 1 uppercase, 1 number and 1 special character'
    }
  };

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.GetListUsers();
    this.currentForm = this.BuildForm();
    this.submitted = false;
    this.user = new User();
  }

  newUser(): void {
    this.submitted = false;
    this.currentForm = this.BuildForm();
    this.user = new User();
  }

  BuildForm() {
    console.log(this.list);
    return this.formBuilder.group({
      _id: [''],
      userId: ['', [Validators.required, /*VerifyUserId(this.list)*/]],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]]
    });
  }

  GetListUsers() {
    this.service.getUsers()
    .subscribe(
      data => {
        this.list = data as User[];
        console.log(this.list);
        this.currentForm = this.BuildForm();
        this.currentForm.valueChanges
        .subscribe(data2 => this.onValueChange(data2));
        this.onValueChange();
      }
    );
  }

  onSubmit() {
    this.user = this.prepareUser();
    this.submitted = true;
    if (this.currentForm.invalid) {
      this.onValueChange();
      this.submitted = false;
      return;
    }
    this.sendUser();
  }

  prepareUser(): User {
    const f = this.currentForm.value;
    const saveUser: User = {
      uName: f.uName,
      fName: f.fName,
      lName: f.lName,
      pass: f.password,
    };
    return saveUser;
  }

  sendUser() {
    this.service.createUser(this.user)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

  onValueChange(data?: any) {
    if (!this.currentForm) { return; }
    const form = this.currentForm;

    for (const field in this.formErrors) {
      this.formErrors[field].message = ' ';
      const control = form.get(field);

      if (control && (control.dirty || ((control.value === '') && (this.submitted === true)) && !control.valid)) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line: forin
        for (const key in control.errors) {
          this.formErrors[field].message = messages[key];
          this.formErrors[field].show = true;
          }
      }
      if (this.formErrors[field].message === ' ') {
        this.formErrors[field].show = false;
      }
    }
  }
}
