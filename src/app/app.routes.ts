import { Route, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { UsersComponent } from './admin/users/users.component';

export const routes: Route[] = [
    { path: 'admin/dashboard', component: DashboardComponent },
    { path: 'admin/products', component: ProductsComponent },
    { path: 'admin/reports', component: ReportsComponent },
    { path: 'admin/users', component: UsersComponent },
    { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' }, 
  ];