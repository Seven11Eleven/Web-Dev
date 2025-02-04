import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ProductsComponent } from './app/products/products.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([{ path: '', component: ProductsComponent }])
  ]
}).catch(err => console.error(err));
