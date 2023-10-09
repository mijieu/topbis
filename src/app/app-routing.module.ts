import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ItemResolver } from './services/itemResolver';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { UserComponent } from './pages/user/user.component';
import { AddComponent } from './pages/add/add.component';
import { MessageComponent } from './pages/message/message.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { SearchHistoryComponent } from './pages/search-history/search-history.component';
import { FollowingComponent } from './pages/following/following.component';
import { ProductImgComponent } from './pages/product-img/product-img.component';
//import { DetailsPageModule } from './details/details.module';

const routes: Routes = [
  /*{ 
    path: 'product-detail/:id', 
    component: DetailsPageModule 
  },*/
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'product',
    component: ProductDetailComponent
  },
  {
    path: 'image',
    component: ProductImgComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'search-history',
    component: SearchHistoryComponent
  },
  {
    path: 'follow',
    component: FollowingComponent
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
