import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ClaimService, Claim } from '.';

@Injectable({
  providedIn: 'root'
})
export class ClaimGuard implements CanActivate {
  constructor(
    private claimService: ClaimService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.claimService.getCurrentClaim())
    {
      console.log('false');
      return false;
    }
    else{
      return true;
    }
  }
}
