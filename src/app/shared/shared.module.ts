import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class SharedModule {
}
