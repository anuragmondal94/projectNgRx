import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArticleInterface } from "../types/article.interface";
import { environment } from "src/environments/environment.development";
import { Observable, map } from "rxjs";
import { ArticleResponseInterface } from "../types/articleResponse.interface";

@Injectable({
    providedIn: 'root',
  })
  export class ArticleService {
    constructor(private http: HttpClient) {}
  
    getArticle(slug: string): Observable<ArticleInterface> {
      const fullUrl = `${environment.apiUrl}/articles/${slug}`
      return this.http.get<ArticleResponseInterface>(fullUrl).pipe(map((response) => response.article));
    }
  }
  