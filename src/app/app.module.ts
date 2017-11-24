import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth-module';
import { PublicListsComponent } from './lists/public-lists/public-lists.component';
import { AlertService } from './shared/alert.service';
import { AlertComponent } from './shared/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicListsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
