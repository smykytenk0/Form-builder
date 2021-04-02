import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageEffects } from './store/effects/login-page.effects';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [
    BrowserModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([LoginPageEffects]),  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
