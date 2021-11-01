import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {

  @Input()
  item;

  orig_item;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;
  newTitle = '';

  doEdit(title){
    this.titleChanged.emit(this.item);
  }

  doCancel(){
    this.item = Object.assign({}, this.orig_item);
    this.isEdit = false;
  }

  delArticle(){
    this.delete.emit(this.item);
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if (changes.item) {
      this.orig_item = changes.item.currentValue;
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

}
