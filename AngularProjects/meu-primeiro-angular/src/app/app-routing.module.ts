import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';

import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
{ path: 'header', component: HeaderComponent }, //não precisa criar
{ path: 'footer', component: FooterComponent }, //não precisa criar
{ path: '', component: HomeComponent }, //está vazia para não precisar digitar /home e já entrar nessa página quando abrir o site
{ path: 'sobre', component: SobreComponent },
{ path: 'contato', component: ContatoComponent },
{ path: 'formulario', component: FormularioComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
