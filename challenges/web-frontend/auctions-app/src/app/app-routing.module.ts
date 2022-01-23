import { SalesmanGuard } from './core/guards/salesman.guard';
import { LoggedinGuard } from './core/guards/loggedin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomePageComponent
  },
  {
    path: 'login',
    canActivate: [LoggedinGuard],
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'overview',
    canActivate: [AuthGuard, SalesmanGuard],
    loadChildren: () =>
      import('./feature-modules/auctions/auctions.module').then(
        (m) => m.AuctionsModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
