import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'angular-will-blog';
  url = 'http://blog.miniasp.com/';
  imgUrl = '/assets/images/logo.png';
  wordLength = 0;
  constructor() { }


  changeTitle($altKey: boolean){
    if($altKey)
    {
      this.title = 'Changed Title';
    }
    console.log($altKey);
  }

  ngOnInit() {
  }

}
