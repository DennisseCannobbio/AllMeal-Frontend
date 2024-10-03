import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbNavModule, NgbDropdownModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgPipesModule } from 'ngx-pipes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { MenusComponent } from './menus/menus.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EnviarMenuComponent } from './slack/enviar-menu/enviar-menu.component';
import { UserResponsesComponent } from './slack/user-responses/user-responses.component';



@NgModule({
  declarations: [DashboardComponent, MenusComponent, PedidosComponent, EnviarMenuComponent, UserResponsesComponent],
  exports: [
    MenusComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
    NgPipesModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    NgbModule,
    ModalModule.forRoot(),
    SweetAlert2Module.forRoot(),
    BsDatepickerModule.forRoot(),
    NgSelectModule
  ],
  providers: [
  ]
})
export class PagesModule { }
