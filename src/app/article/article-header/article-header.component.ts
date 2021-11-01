import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit {

  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;
  newTitle = '';

  doEdit(title){
    this.newTitle = title;
    this.titleChanged.emit({id: this.item.id, title: title});
  }

  delArticle(){
    this.delete.emit(this.item);
  }

  constructor() { }

  ngOnInit() {
    this.newTitle = this.item.title;
  }

}
