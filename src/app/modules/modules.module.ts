import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from '../pages/home/home.component';
import { SearchComponent } from '../pages/search/search.component';
import { ProductDetailComponent } from '../pages/product-detail/product-detail.component';
import { UserComponent } from '../pages/user/user.component';
import { AddComponent } from '../pages/add/add.component';
import { MessageComponent } from '../pages/message/message.component';
import { ChatComponent } from '../pages/chat/chat.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { WishlistComponent } from '../pages/wishlist/wishlist.component';
import { SearchHistoryComponent } from '../pages/search-history/search-history.component';
import { FollowingComponent } from '../pages/following/following.component';
import { ProductImgComponent } from '../pages/product-img/product-img.component';

import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    MenuComponent, 
    HomeComponent, 
    SearchComponent,
    ProductDetailComponent,
    ProductImgComponent,
    UserComponent,
    AddComponent,
    MessageComponent,
    ChatComponent,
    ProfileComponent,
    WishlistComponent,
    SearchHistoryComponent,
    FollowingComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ModulesModule { }
