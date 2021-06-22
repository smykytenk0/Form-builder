import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MatDatepickerModule } from "@angular/material/datepicker";

import { AppComponent } from './app.component';
import { ElementsStyleReducer } from './store/styles.reducer';
import { environment } from '../environments/environment';
import { FormsComponent } from './forms/forms.component';
import { AccordionBlockComponent } from './accordion-block/accordion-block.component';
import { ButtonComponent } from './form-components/button/button.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { InputComponent } from './form-components/input/input.component';
import { LabelComponent } from './form-components/label/label.component';
import { SelectComponent } from './form-components/select/select.component';
import { TextareaComponent } from './form-components/textarea/textarea.component';
import { SwitchStylesComponent } from './switch-styles/switch-styles.component';
import { SwitchBuilderComponent } from './switch-builder/switch-builder.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { HeaderComponent } from './header/header.component';
import { AuthEffects } from './store/effects';
import { SimplePipe } from './shared/pipes/simple.pipe';
import { TokenInterceptor } from "./shared/interceptors/token.interceptor";
import { AppRoutingModule } from "./app-routing.module";




@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TextareaComponent,
    AccordionBlockComponent,
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    LabelComponent,
    SelectComponent,
    SwitchStylesComponent,
    SwitchBuilderComponent,
    HeaderComponent,
    SimplePipe
  ],
  imports: [
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot({elementStylesReducer: ElementsStyleReducer}),
    BrowserModule,
    DragDropModule,
    FormsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    PortalModule,
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
