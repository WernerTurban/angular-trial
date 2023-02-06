import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import User from "../../models/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User | undefined;
  editMode = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getUser(params['id']);
    })
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe((user) => this.user = user);
  }

  editUser(): void {
    this.editMode = true;
  }

  deleteUser(): void {
    if (this.user?.id) {
      this.userService.deleteUser(this.user.id).subscribe(
        () => this.router.navigate(['/users']));
    }
  }

  submitEditedUser(user: User): void {
    this.userService.updateUser(user).subscribe((user) => {
      this.user = user;
      this.editMode = false;
    });
  }
}
