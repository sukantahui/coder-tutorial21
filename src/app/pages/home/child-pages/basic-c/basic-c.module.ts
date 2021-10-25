import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicCRoutingModule } from './basic-c-routing.module';
import { BasicCComponent } from './basic-c.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    BasicCComponent
  ],
  imports: [
    CommonModule,
    BasicCRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule
  ]
})
export class BasicCModule { }
