import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmplistComponent } from './emplist/emplist.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {'path':'', component:HomeComponent},
    {'path':'about', component:AboutComponent},
    {'path':'emplist', component:EmplistComponent},
    {'path':'product', component:ProductComponent},
    {'path':'**', component:PagenotfoundComponent},
];
