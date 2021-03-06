import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlayComponent } from './components/play/play.component';
import { MeComponent } from './components/me/me.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'play', component: PlayComponent},
  { path: 'me', component: MeComponent},
  { path: 'u/:username', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  LoginComponent,
  PlayComponent,
  MeComponent,
  UserComponent
]