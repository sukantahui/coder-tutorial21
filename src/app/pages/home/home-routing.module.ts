import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
                          { path: '', component: HomeComponent,
                            children: [
                                { path: 'BasicC', loadChildren: () => import('./child-pages/basic-c/basic-c.module').then(m => m.BasicCModule) },
                            ]
                          },
                          // { path: '404', loadChildren: () => import('./home-not-found/home-not-found.module')
                          //         .then(m => m.HomeNotFoundModule)
                          // },
                          // { path: '**', redirectTo: '/404'}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
