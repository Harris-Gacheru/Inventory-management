import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCartItemsComponent } from './components/cart/view-cart-items/view-cart-items.component';
import { ViewCartComponent } from './components/cart/view-cart/view-cart.component';
import { OrdersListingsComponent } from './components/orders/orders-listings/orders-listings.component';
import { ViewOrderComponent } from './components/orders/view-order/view-order.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductListingsComponent } from './components/products/product-listings/product-listings.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent, children: [
    {path: '', component: ProductListingsComponent},
    {path: 'add', component: AddProductComponent},
    {path: ':id', component: ViewProductComponent},
    {path: 'edit/:id', component: EditProductComponent}
  ]},
  {path: 'orders', component: OrdersComponent, children: [
    {path: '', component: OrdersListingsComponent},
    {path: ':id', component: ViewOrderComponent}
  ]},
  {path: 'cart', component: CartComponent, children: [
    {path: '', component: ViewCartComponent},
    {path: 'items/:id', component: ViewCartItemsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
