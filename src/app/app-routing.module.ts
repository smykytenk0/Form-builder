import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from "./forms/forms.component";
import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  {path: '', loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)},
  {path: 'forms', component: FormsComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
