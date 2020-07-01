import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService , Claim } from '../core';
@Component({
  selector: 'app-claim-screen',
  templateUrl: './claim-screen.component.html',
  styleUrls: ['./claim-screen.component.sass']
})
export class ClaimScreenComponent implements OnInit
{
  constructor(
    private claimService: ClaimService,
    private router: Router
  ) {}
 
  claim: Claim;
  claimsLoaded = false;
  seconds() { return 0; }
  ngOnInit(): void {
    this.claimService.getAll()
      .subscribe(claims => {
        // tslint:disable-next-line: no-console
        this.claim = claims[0];
        this.claimService.setCurrentClaim(this.claim);
        this.claimsLoaded = true;
      });
  }

}
