import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modules/home/home.component';
import { SignupComponent } from './modules/signup/signup.component';
import { SigninComponent } from './modules/signin/signin.component';
import { CreditsComponent } from './modules/credits/credits.component';
import { MetricsComponent } from './modules/metrics/metrics.component';
import { RaiserequestComponent } from './modules/raiserequest/raiserequest.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { TrynowComponent } from './modules/trynow/trynow.component';
import { TicketcommentsComponent } from './modules/ticketcomments/ticketcomments.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,pathMatch:'full'

  },
  { path: 'nav', component: SidenavComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: 'raisereq', component: RaiserequestComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'trynow', component: TrynowComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'Ticket_Comments', component: TicketcommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true}),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
