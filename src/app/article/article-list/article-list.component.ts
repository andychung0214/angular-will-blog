import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  delItem;
  constructor(public datasvc: DataService) { }

  ngOnInit() {
    this.datasvc.run();
  }
}
