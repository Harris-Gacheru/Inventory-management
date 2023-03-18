import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductListingsComponent } from './components/products/product-listings/product-listings.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';
import { OrdersListingsComponent } from './components/orders/orders-listings/orders-listings.component';
import { ViewOrderComponent } from './components/orders/view-order/view-order.component';
import { ViewCartComponent } from './components/cart/view-cart/view-cart.component';
import { ViewCartItemsComponent } from './components/cart/view-cart-items/view-cart-items.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    OrdersComponent,
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    ProductListingsComponent,
    ViewProductComponent,
    OrdersListingsComponent,
    ViewOrderComponent,
    ViewCartComponent,
    ViewCartItemsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
