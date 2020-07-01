import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    // tslint:disable-next-line: no-string-literal
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    // tslint:disable-next-line: no-string-literal
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
