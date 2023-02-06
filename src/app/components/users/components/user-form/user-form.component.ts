import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import User from "../../models/user";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() editedUser: User | undefined;

  @Output() returnedUser = new EventEmitter<User>;

  user: User | undefined;

  submitted = false;

  userForm = this.formBuilder.group({
    name: [
      '',
      Validators.required
    ],
    username: [
      '',
      Validators.required
    ],
    email: [
      '',
      Validators.required,
    ],
    phone: [
      '',
      [Validators.required, Validators.pattern("[-?()0-9]+")]
    ]
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.editedUser !== undefined) {
      const user = this.editedUser;
      this.userForm.controls.name.setValue(user.name);
      this.userForm.controls.username.setValue(user.username);
      this.userForm.controls.email.setValue(user.email);
      this.userForm.controls.phone.setValue(user.phone);
    }
  }

  submitUser(): void {
    this.submitted = true;

    if (this.userForm.valid) {
      this.createUser();
      this.returnedUser.emit(this.user);
    } else {
      console.log(this.userForm);
    }
  }

  createUser(): void {
    this.user = new User(
      this.userForm.value.name as string,
      this.userForm.value.username as string,
      this.userForm.value.email as string,
      this.userForm.value.phone as string
    )
  }

  get formControls() {
    return this.userForm.controls;
  }
}
