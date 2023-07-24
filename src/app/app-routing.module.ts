import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ItemResolver } from './services/itemResolver';
//import { DetailsPageModule } from './details/details.module';

const routes: Routes = [
  /*{ 
    path: 'product-detail/:id', 
    component: DetailsPageModule 
  },*/
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule),
    resolve: {
      item: ItemResolver
    }
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
