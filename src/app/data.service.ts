import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(
    private httpClient: HttpClient,
  ) { }
  getData() {
    return this.httpClient.get(
      '/assets/home-page-slider-images.json',
    );
  }
  getListNewGoods(){
    return this.httpClient.get(
      '/assets/home-page-new-goods.json',
    )
    .pipe(
      map((res: Response) =>{
        return res;
      })
      ,catchError((err: HttpErrorResponse)=> 
        Observable.throw(err.status)
      )
    )
  };
}