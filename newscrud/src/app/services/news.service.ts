import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {News} from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
    API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }
  get() {
      return this.httpClient.get(this.API_ENDPOINT + '/noticias');
  }
  save(article: News) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer x8E0wslzcVjRS0mugZjEQ8CNSgwJe5YTQoKdG3iV8pvIqRQBEbKspFrhZJpV'});
    return this.httpClient.post(this.API_ENDPOINT + '/noticias', article, {headers: headers});
  }
  put(article) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer x8E0wslzcVjRS0mugZjEQ8CNSgwJe5YTQoKdG3iV8pvIqRQBEbKspFrhZJpV'});
    return this.httpClient.put(this.API_ENDPOINT + '/noticias/' + article.id, article, {headers: headers});
  }
  delete(id) {
    if (confirm('Tem certeza que deseja apagar esta noticia?')) {
      const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer x8E0wslzcVjRS0mugZjEQ8CNSgwJe5YTQoKdG3iV8pvIqRQBEbKspFrhZJpV'});
      return this.httpClient.delete(this.API_ENDPOINT + '/noticias/' + id, {headers: headers});
    }
  }
}
