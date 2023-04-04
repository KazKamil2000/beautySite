import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { MoreInfoComponent } from './more-info/more-info.component';

const routes: Routes = [ {
  path: "",
  component: HomeComponent
},
{
  path:"oNas",
  component: AboutComponent
},
{
  path:"zabiegi",
component: ProductsComponent
},
{
  path:"kontakt",
  component: ContactComponent
},
{
  path:"moreInfo",
  component: MoreInfoComponent
} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
