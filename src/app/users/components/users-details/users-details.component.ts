import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersApiService } from '@users/services/users-api.service';
import IUser from '@users/interfaces/user';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  user: any;
  error = '';
  loading = false;

  constructor(private usersApiService: UsersApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
        this.loading = true;
        this.route.params.subscribe(params => {
          const id= params['id'];
          console.log(id);
          this.usersApiService.getUserById(id)
            .then(user => {
              this.user = user;
              console.log(this.user.name);
            })
            .catch( error => {       
              this.error = 'hubo un error. Intente mas tarde';
            })
            .finally( () => {
              this.loading = false;
            });
        });
  }

}
