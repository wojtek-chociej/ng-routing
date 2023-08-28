import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminIndexPageComponent } from './admin-index-page/admin-index-page.component';


@NgModule({
  declarations: [
    AdminIndexPageComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
