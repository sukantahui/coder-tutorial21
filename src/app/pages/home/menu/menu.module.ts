import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {AuthModule} from '../auth/auth.module';
import {MenuPublicModule} from './menu-public/menu-public.module';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        MenuRoutingModule,
        MenuPublicModule,
        MatIconModule
    ]
})
export class MenuModule { }
