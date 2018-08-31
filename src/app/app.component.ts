import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  users = [];

  constructor(private userService: UserService){}
  
  ngOnInit(){
    this.userService.getUsers().subscribe(users => {
      this.users = users
    })
  }
}
