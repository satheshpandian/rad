import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimScreenComponent } from './claim-screen/claim-screen.component';
import { SuccessComponent } from './success/success.component';
import { ClaimGuard } from './core/claim.guard';



const routes: Routes = [
  {
    path: 'claim',
    component: ClaimScreenComponent
  },
  {
    path: 'success',
    canActivate: [ClaimGuard],
    component: SuccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
