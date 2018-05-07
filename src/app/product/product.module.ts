import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTagComponent } from './product-tag/product-tag.component';
import {RouterModule, Router, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path:"product",component:ProductListComponent},
  { path:'product/tag', component:ProductTagComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [ProductListComponent, ProductTagComponent]
})
export class ProductModule { }
