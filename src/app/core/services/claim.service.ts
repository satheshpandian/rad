import { Injectable, OnDestroy } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject  } from 'rxjs';

import { ApiService } from './api.service';
import { Claim } from '../models';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private currentClaimSubject = new BehaviorSubject<Claim>({} as Claim);
  public currentClaim = this.currentClaimSubject.asObservable().pipe(distinctUntilChanged());
  constructor(
    private apiService: ApiService
  ) {}
  destroy$: Subject<boolean> = new Subject<boolean>();
  getAll(): Observable<Claim> {
    return this.apiService.get('/claims')
      .pipe(map(data => data));
  }
  getCurrentClaim(): Claim {
    return this.currentClaimSubject.value;
  }
  setCurrentClaim(claim: Claim) {
    this.currentClaimSubject.next(claim);
  }
clearCurrentClaim()
{
  this.currentClaimSubject.next({} as Claim);
}

}
