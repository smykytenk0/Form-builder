import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {RouterModule, Routes} from "@angular/router";
import { FormsComponent } from './forms/forms.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { AccordionSectionComponent } from './accordion-section/accordion-section.component';
import { AccordionBlockComponent } from './accordion-block/accordion-block.component';


const appRoutes: Routes = [
  {path:"login", component:LoginFormComponent},
  {path:"registration", component:RegistrationFormComponent},
  {path:"", component:LoginFormComponent},
  {path:"forms", component: FormsComponent}

];


@NgModule({
  declarations: [AppComponent, LoginFormComponent, RegistrationFormComponent, FormsComponent, AccordionSectionComponent, AccordionBlockComponent],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
