import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MatDatepickerModule } from "@angular/material/datepicker";

import { AppComponent } from './app.component';
import { ElementsStyleReducer } from './store/styles.reducer';
import { environment } from '../environments/environment';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { HeaderComponent } from './header/header.component';
import { SimplePipe } from './shared/pipes/simple.pipe';
import { TokenInterceptor } from "./shared/interceptors/token.interceptor";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimplePipe
  ],
  imports: [
    StoreModule.forRoot({elementStylesReducer: ElementsStyleReducer}),
    BrowserModule,
    MatExpansionModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule
  ],
  providers: [AuthGuard, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
