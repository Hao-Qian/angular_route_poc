import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Router, Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SearchComponent } from './search/search.component';
import { UserResolver } from './user/userResolver.service';
import { ProductModule } from './product/product.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductTagComponent } from './product/product-tag/product-tag.component';

const appRoutes: Routes = [
  { path: 'welcome', component:WelcomeComponent  },
  { path: 'search', component: SearchComponent },
  { path:'product', component:ProductListComponent, children:[
   { path: "tag", component:ProductTagComponent}
  ]

  },
  { path: 'user/:id', component: UserDetailComponent, resolve:{ user: UserResolver} },
  { path: 'user', component:UserComponent, resolve:{ user: UserResolver}   },
  { path: '', redirectTo:'user',  pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavmenuComponent,
    UserComponent,
    UserDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    /*RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )*/
    RouterModule.forRoot(appRoutes),

  ],
  providers: [UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
  


}
