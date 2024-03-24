import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrhomeComponent } from './hrhome/hrhome.component';
import { LoginComponent } from './login/login.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './admin/components/navbar/navbar.component';
import { FooterComponent } from './admin/components/footer/footer.component';
import { AdmindashboardComponent } from './admin/pages/admindashboard/admindashboard.component';
import { AdmindirectoryComponent } from './admin/pages/admindirectory/admindirectory.component';
import { AdminremunerationsComponent } from './admin/pages/adminremunerations/adminremunerations.component';
import { AdminaddemployeeComponent } from './admin/pages/adminaddemployee/adminaddemployee.component';
import { AdmineventsComponent } from './admin/pages/adminevents/adminevents.component';
<<<<<<< HEAD
import { EmployeeDashComponent } from './employee/employee-dash/employee-dash.component';
=======
import { AdminrequestsComponent } from './admin/pages/adminrequests/adminrequests.component';
import { AdminmessagesComponent } from './admin/pages/adminmessages/adminmessages.component';
import { AdminactivitiesComponent } from './admin/pages/adminactivities/adminactivities.component';
>>>>>>> 9c2141e7bc60726aa78aab7f932db7921b1d75c1

@NgModule({
  declarations: [
    AppComponent,
    HrhomeComponent,
    LoginComponent,
    EmployeehomeComponent,
    NavbarComponent,
    FooterComponent,
    AdmindashboardComponent,
    AdmindirectoryComponent,
    AdminremunerationsComponent,
    AdminaddemployeeComponent,
    AdmineventsComponent,
<<<<<<< HEAD
    EmployeeDashComponent,
=======
    AdminrequestsComponent,
    AdminmessagesComponent,
    AdminactivitiesComponent
>>>>>>> 9c2141e7bc60726aa78aab7f932db7921b1d75c1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
