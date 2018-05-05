import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreMaterialModule } from '../core-material/core-material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PttDashboardComponent } from './ptt-dashboard/ptt-dashboard.component';

const CORE_EXPORTS = [
  MainNavComponent,
  PttDashboardComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreMaterialModule
  ],
  declarations: [
    ...CORE_EXPORTS
  ],
  exports: [
    ...CORE_EXPORTS
  ]
})
export class CoreModule { }
