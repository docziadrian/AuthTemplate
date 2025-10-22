import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { LostpassComponent } from './Components/lostpass/lostpass.component';
import { PassmodComponent } from './Components/passmod/passmod.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MainComponent } from './Components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'lostpass',
    component: LostpassComponent,
  },
  {
    path: 'passmod',
    component: PassmodComponent,
  },
  {
    path: 'profil',
    component: ProfileComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  { path: '**', component: NotfoundComponent },
];
