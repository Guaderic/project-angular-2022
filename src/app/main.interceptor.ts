import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTkyYzEwYmY5NTE4ZmZiOWE4MTdhYjgwZWNhYjRjOCIsInN1YiI6IjYyOTViNjkyZWVlMTg2MGVmMTViYTQ0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HLbJBadxOmGn2USCTNw_3929J5Nv6VoLhgC60XYBnEs'
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  request = request.clone({
    setHeaders:{
      Authorization:`Bearer ${this._token}`
    }
  })
    return next.handle(request);
  }
}
