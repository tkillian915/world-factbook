import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';

@Component({
  selector: 'wf-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  myInfo: UserInfo | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending request to server");
    this.showUserInfo();
  }

  getUserInfo()
  {
    return this.http.get<UserInfo>('https://world-factbook-17ada-default-rtdb.firebaseio.com/myInfo.json');
  }

  showUserInfo()
  {
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
    })
  }
}
