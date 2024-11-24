import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent }, // Definir a rota inicial como HomeComponent
    { path: 'details/:id', component: DetailsComponent } // Adicionar rota para DetailsComponent com parâmetro id
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }