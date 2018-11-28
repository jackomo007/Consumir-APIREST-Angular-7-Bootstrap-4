import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../interfaces/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: News[];
  constructor(private newService: NewsService) {
  this.getNews();
  }
  getNews() {
    this.newService.get().subscribe((data: News[]) => {
        this.news = data;
    }, (error) => {
        console.log(error);
        alert('Aconteçeu um erro');
    });
}
  ngOnInit() {
  }
  delete(id) {
  this.newService.delete(id).subscribe((data) => {
    alert('Noticia Apagada');
    console.log(data);
    this.getNews();
  }, (error) => {
      console.log(error);
      alert('Aconteçeu um erro');
  });
}
}
