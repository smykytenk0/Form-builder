import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import { ElementsStyleReducer } from "./store/styles.reducer";

import { AppComponent } from "./app.component";
import { ReactiveComponentModule } from '@ngrx/component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsComponent } from './forms/forms.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AccordionBlockComponent } from './accordion-block/accordion-block.component';
import { PortalModule } from "@angular/cdk/portal";
import { ButtonComponent } from './form-components/button/button.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { InputComponent } from './form-components/input/input.component';
import { LabelComponent } from './form-components/label/label.component';
import { SelectComponent } from './form-components/select/select.component';
import {TextareaComponent} from "./form-components/textarea/textarea.component";
import { SwitchStylesComponent } from './switch-styles/switch-styles.component';
import { SwitchBuilderComponent } from './switch-builder/switch-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from "@angular/material/expansion";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { EffectsModule } from '@ngrx/effects';
import {AuthEffects} from "./store/effects";
import { SimplePipe } from './pipes/simple.pipe';


const appRoutes: Routes = [
  {path:"login", component:LoginFormComponent},
  {path:"registration", component:RegistrationFormComponent},
  {path:"", component:LoginFormComponent},
  {path:"forms", component: FormsComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [AppComponent, LoginFormComponent, RegistrationFormComponent, FormsComponent, TextareaComponent, AccordionBlockComponent, ButtonComponent, CheckboxComponent, InputComponent, LabelComponent, SelectComponent, SwitchStylesComponent, SwitchBuilderComponent, HeaderComponent, SimplePipe],
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

    RouterModule.forRoot(appRoutes),
    PortalModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
