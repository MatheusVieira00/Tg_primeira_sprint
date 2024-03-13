import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"cadastro", component: CadastroComponent},
  {path:"esqueci", component: EsqueciComponent},
  {path: '', component:LoginComponent},
  {path: "inicio", component: InicioComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
