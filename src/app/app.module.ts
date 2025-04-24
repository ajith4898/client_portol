import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './shared/body/body.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './modules/home/home.component';
import { SignupComponent } from './modules/signup/signup.component';
import { SigninComponent } from './modules/signin/signin.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MetricsComponent } from './modules/metrics/metrics.component';
import { TrynowComponent } from './modules/trynow/trynow.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { CreditsComponent } from './modules/credits/credits.component';
import { RaiserequestComponent } from './modules/raiserequest/raiserequest.component';
import {MatTableModule} from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import {ClipboardModule} from '@angular/cdk/clipboard'; 
import { SwiperModule } from 'swiper/angular';
import { AddticketComponent } from './Dialogue/addticket/addticket.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TicketcommentsComponent } from './modules/ticketcomments/ticketcomments.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    SidenavComponent,
    SpinnerComponent,
    LayoutComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    MetricsComponent,
    TrynowComponent,
    SettingsComponent,
    CreditsComponent,
    RaiserequestComponent,
    AddticketComponent,
    TicketcommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ClipboardModule,
  SwiperModule,
  MatDialogModule,
    MatTableModule,MatPaginatorModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
