import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './Pages/first-page.component';
import { MnFullpageModule } from 'ngx-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
      MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent,
    FirstPageComponent]
})
export class AppModule { }
