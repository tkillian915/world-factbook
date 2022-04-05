import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wf-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm)
  {
    console.log("Button clicked");
    console.log(data);
    data.reset();
  }
}
