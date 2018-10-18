import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: { username: string ,password:string};

  constructor() { }

  save(data){
    console.log('aaaaaaaaaaaaa',data);
  }

  ngOnInit() {
    this.user = { username: 'liuyun' ,password:'1236'};
  }

}
