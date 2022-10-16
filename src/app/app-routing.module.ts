import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderplaceComponent } from './orderplace/orderplace.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'cart'},
  {path:'cart',component:CartComponent},
  {path:'orderplace',component:OrderplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
