import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MenusComponent } from './menus/menus.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EnviarMenuComponent } from './slack/enviar-menu/enviar-menu.component';
import { UserResponsesComponent } from './slack/user-responses/user-responses.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'menus', component: MenusComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'slack/sendmenu', component: EnviarMenuComponent },
    { path: 'slack/responses', component: UserResponsesComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
