import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MnFullpageModule } from 'ngx-fullpage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
