import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';
import {
  ApiService,
  JwtService,
  ClaimService
} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    ClaimService,
    JwtService
  ],
})
export class CoreModule { }
