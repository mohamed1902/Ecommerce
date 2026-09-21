import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';
import { registerGuard } from '../core/guards/register.guard';
import { myDetailsResolver } from '../core/guards/my-details.resolver';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./layouts/auth-layout/auth-layout.component").then((c) => c.AuthLayoutComponent),
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", loadComponent: () => import("./pages/login/login.component").then((c) => c.LoginComponent) },
      { path: "register", loadComponent: () => import("./pages/register/register.component").then((c) => c.RegisterComponent), canDeactivate: [registerGuard] },
    ]
  },
  {
    path: "", loadComponent: () => import("./layouts/user-layout/user-layout.component").then((c) => c.UserLayoutComponent), canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "home", pathMatch: 'full' },
      { path: "home", loadComponent: () => import("./pages/home/home.component").then((c) => c.HomeComponent) },
      { path: "cart/:id", loadComponent: () => import("./pages/cart/cart.component").then((c) => c.CartComponent) },
      { path: "product", loadComponent: () => import("./pages/product/product.component").then((c) => c.ProductComponent) },
      { path: "details/:id", loadComponent: () => import("./pages/details/details.component").then((c) => c.DetailsComponent), resolve: { details: myDetailsResolver } },
      { path: "category", loadComponent: () => import("./pages/category/category.component").then((c) => c.CategoryComponent) },
      { path: "specificCategory/:type", loadComponent: () => import("./pages/specific-category/specific-category.component").then((c) => c.SpecificCategoryComponent) },
      { path: "**", redirectTo: "home", pathMatch: "full" }
    ]
  }
];
