import { NgModule } from "@angular/core";
import { AccordionBlockComponent } from "./accordion-block/accordion-block.component";
import { FormsComponent } from "./forms/forms.component";
import { TextareaComponent } from "./form-components/textarea/textarea.component";
import { ButtonComponent } from "./form-components/button/button.component";
import { CheckboxComponent } from "./form-components/checkbox/checkbox.component";
import { InputComponent } from "./form-components/input/input.component";
import { LabelComponent } from "./form-components/label/label.component";
import { SelectComponent } from "./form-components/select/select.component";
import { SwitchStylesComponent } from "./switch-styles/switch-styles.component";
import { SwitchBuilderComponent } from "./switch-builder/switch-builder.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveComponentModule } from "@ngrx/component";
import { MatExpansionModule } from "@angular/material/expansion";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PortalModule } from "@angular/cdk/portal";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: '', component: FormsComponent },
];

@NgModule({
  declarations: [
    AccordionBlockComponent,
    FormsComponent,
    TextareaComponent,
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    LabelComponent,
    SelectComponent,
    SwitchStylesComponent,
    SwitchBuilderComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    DragDropModule,
    ReactiveComponentModule,
    CommonModule,
    MatExpansionModule,
    PortalModule,
  ]
})
export class FormsBuilderModule { }
