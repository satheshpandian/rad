import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from '../services';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      // tslint:disable-next-line: object-literal-key-quotes
      'Accept': 'application/json'
    };

    const token = this.jwtService.getToken();

    if (token) {
      // tslint:disable-next-line: no-string-literal
      headersConfig['Authorization'] = `Token ${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}