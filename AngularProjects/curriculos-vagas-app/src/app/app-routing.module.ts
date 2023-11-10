import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';
import { CurrciculosComponent } from './view/curriculos/curriculos.component';

const routes: Routes = [
  {path:'', component:InicioComponent}, // Rota para a página inicial
  {path: 'curriculos', component:CurrciculosComponent}, // Rota para currículos
  {path: 'vagas', component:VagasComponent }, // Rota para vagas
  {path: 'painel-vagas', component:PainelVagasComponent},
  {path: 'painel-curriculos', component:PainelCurriculosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
