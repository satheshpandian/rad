import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService, Claim } from '../core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.sass']
})
export class SuccessComponent implements OnInit, OnDestroy {

  constructor(
    private claimService: ClaimService,
    private router: Router
  ) {}
  
  claim: Claim;
  claimsLoaded = false;
  ngOnInit(): void {
            // tslint:disable-next-line: no-console
        this.claim = this.claimService.getCurrentClaim();
        this.claimsLoaded = true;
      }

      ngOnDestroy(): void {
        this.claimService.clearCurrentClaim();
      }

}
