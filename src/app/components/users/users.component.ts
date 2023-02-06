import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import User from "./models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  userCreation = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.users.length === 0) {
      this.getUsers();
    }
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => this.users = users);
  }

  addUser() {
    this.userCreation = true;
  }

  createUser(user: User): void {
    this.userService.createUser(user).subscribe((user) => {
      console.log("Created user: " +
        JSON.stringify(user));
      this.users.push(user);
      this.userCreation = false;
    });
  }

  searchUsers(username: string): void {
    if (username !== '') {
      this.getUsersByUsername(username);
    } else {
      this.getUsers();
    }
  }

  getUsersByUsername(username: string): void {
    this.userService.getUsersByUsername(username).subscribe((users) => this.users = users);
  }
}
