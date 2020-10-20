import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ListClientsComponent } from './client/list-clients/list-clients.component';
import { AddEditClientsComponent } from './client/add-edit-clients/add-edit-clients.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutAppComponent } from './about-app/about-app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ListClientsComponent,
    AddEditClientsComponent,
    AboutAppComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
