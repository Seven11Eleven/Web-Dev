import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Добавляем

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ // ✅ Должно быть здесь, а не в imports
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, // ✅ Нужно для *ngFor и других директив
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
