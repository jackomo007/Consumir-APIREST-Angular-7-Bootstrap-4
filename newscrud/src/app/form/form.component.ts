import { Component, OnInit } from '@angular/core';
import {News} from '../interfaces/news';
import {NewsService} from '../services/news.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  new: News = {
      title: null,
      body: null,
      date: null
  };
  id: any;
  editing: boolean = false;
  news: News[];
  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) {
  this.id = this.activatedRoute.snapshot.params['id'];
  if (this.id) {
      this.editing = true;
      this.newsService.get().subscribe((data: News[]) => {
          this.news = data;
          this.new = this.news.find((m) => { return m.id == this.id });
          console.log(this.new);
      }, (erro) => {
          console.log(erro);
      });
  } else {
      this.editing = false;
  }
  }

  ngOnInit() {
  }

  saveNew() {
      if (this.editing) {
          this.newsService.put(this.new).subscribe((data) => {
              alert('Noticia atualizada');
              console.log(data);
          }, (erro) => {
              console.log(erro);
              alert('Aconteçeu um erro');
          });
      } else {
          this.newsService.save(this.new).subscribe((data) => {
              alert('Noticia salvada');
              console.log(data);
          }, (erro) => {
              console.log(erro);
              alert('Aconteçeu um erro');
          });
      }
  }
}
