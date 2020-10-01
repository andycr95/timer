import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDialogsModule, Ngxalert } from  'ngx-dialogs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDialogsModule
  ],
  providers: [
    Ngxalert
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
