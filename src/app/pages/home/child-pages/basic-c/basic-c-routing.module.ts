import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicCComponent } from './basic-c.component';

const routes: Routes = [{ path: '', component: BasicCComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicCRoutingModule { }
