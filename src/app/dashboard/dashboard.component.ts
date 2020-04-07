import { Component, OnInit } from '@angular/core';
import { AwsCognitoService } from '../service/aws-cognito.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tokenDetails: any;
  token: any;

  constructor(private awsCognitoService: AwsCognitoService) { }

  ngOnInit(): void {
    console.log('Token: ', localStorage.getItem('token'));

    this.token = localStorage.getItem('token');

    if (this.token) {
      const base64Url = this.token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));

      console.log(this.tokenDetails);
    }
  }

  logout(): void {
    window.location.assign(environment.logout);
  }

}
