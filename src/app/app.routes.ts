import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthComponent } from './views/auth/auth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'login', component: AuthComponent }, // Tela de login
  { path: 'register', component: AuthComponent }, // Tela de registro
  { path: 'forgot-password', component: AuthComponent }, // Recuperação de senha
];