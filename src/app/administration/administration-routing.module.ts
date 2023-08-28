import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminIndexPageComponent} from "./admin-index-page/admin-index-page.component";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: AdminIndexPageComponent,
    children:[]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
