import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-will-blog';
  url = 'http://blog.miniasp.com/';
  imgUrl = '/assets/images/logo.png';
  constructor(){

  }
  changeTitle($altKey: boolean){
    if($altKey)
    {
      this.title = 'Changed Title';
    }
    console.log($altKey);
  }
}
