import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(
    private httpClient: HttpClient,
  ) { }
  getData() {
    return this.httpClient.get(
      '/assets/data-home-page.json',
    );
  }
}