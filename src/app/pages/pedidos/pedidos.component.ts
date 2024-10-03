import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PedidosService } from './pedidos.service';
import { lastValueFrom } from 'rxjs';
import { MenusService } from '../menus/menus.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {

  pedidoForm: FormGroup
  lstPedidos: any[] = [];
  lstMenus: any[] = [];
  isNewPedido: boolean;
  @ViewChild('templateVistaPedido', { static: false })
  templateVistaPedido: TemplateRef<any>
  bsModalRef: BsModalRef
  cliente: string = '';
  menus: any[] =[];
  minDate = new Date()
  fecha: any;
  idPedido: number;
  horarioPedido: boolean = true;
  timeChecker: any;
  cargando: boolean = undefined;

  constructor(
    private pedidosService: PedidosService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private menusService: MenusService,
  ){

  }

  ngOnInit(): void {

    this.listarPedidos();
    this.listarMenus();
  }

  async listarPedidos(){
    this.cargando = true;
    let menus$ = this.pedidosService.listarPedidos();

    let res: any = await lastValueFrom(menus$);

    if(res.Ok == true){
      this.lstPedidos = res.data;

      this.lstPedidos.forEach(item =>{
        item.menuStr = item.menus.map(u => u.id).join(', Menú ')
      })

      this.cargando = false;

      this.cdr.detectChanges();

    } else {
      this.lstPedidos = [];
    }
  }

  changeMenus(){
    console.log(this.menus)
  }


  changeFecha(item){
    this.fecha = item;
  }

  async listarMenus(){
    let menus$ = this.menusService.listarMenus();

    let res: any = await lastValueFrom(menus$);

    if(res.Ok == true){

      let fechaHoy = moment(new Date()).format('DD-MM-YYYY')

      let lst = res.data;
      this.lstMenus = [...lst.filter(x => x.fecha === fechaHoy)]
      this.lstMenus.forEach(item => {
        item.str = 'Menú ' + item.id + ` (Entrada: ${item.entrada}, Plato de Fondo: ${item.plato_fondo}, Postre: ${item.postre})`
      })

    } else {
      this.lstMenus = [];
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.pedidoForm.controls;
  }

  abrirModalPedido(pedido: any, isNewPedido: boolean){
    this.isNewPedido = isNewPedido;

    if(isNewPedido == true) {
      this.cliente = ''
      this.menus = [];
      this.fecha = undefined;
      this.idPedido = undefined;
    } else {

      this.idPedido = pedido.id;
      pedido.str = 'Menu ' + pedido.id + ` (Entrada: ${pedido.entrada}, Plato de Fondo: ${pedido.plato_fondo}, Postre: ${pedido.postre})`

      var dateMomentObject = moment(pedido.fecha, "DD/MM/YYYY"); // 1st argument - string, 2nd argument - format
      var dateObject = dateMomentObject.toDate();

      this.cliente = pedido.nombre_cliente;
      this.menus = pedido.menus.map(u => u.id)
      this.fecha = dateObject
    }

    this.bsModalRef = this.modalService.show(this.templateVistaPedido, {
      class: 'modal-lg',
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
    })
  }

  agregarPedido(){
    if( this.cliente.length < 5 ||this.cliente == '' ||this.menus.length == 0 ||!this.fecha || this.fecha == 'Invalid Date')
      {
        return ;
      } else {
          Swal.fire({
            title: '¿Está seguro/a?',
            text: 'Se creará un nuevo pedido',
            icon: 'question',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            cancelButtonText: 'Cancelar'
          })
          .then(async (r) => {
            if(r.isConfirmed) {

              let fechaString = moment(this.fecha).format('DD-MM-YYYY')

              console.log(fechaString)

              let agregarMenu$ = this.pedidosService.agregarPedido(this.cliente, this.menus, fechaString);

              let res: any = await lastValueFrom(agregarMenu$);

              if(res.Ok == true) {
                Swal.fire({
                  title: '¡Éxito!',
                  text: 'Se ha creado un nuevo pedido',
                  icon: 'success',
                  confirmButtonText: 'Aceptar',
                  showCancelButton: false,
                })
                .then((r) => {
                  if(r.isConfirmed) {
                    this.bsModalRef.hide();
                    this.ngOnInit();
                  }
                })

              } else {
                Swal.fire('Error', 'No se ha creado un nuevo menú.', 'error');
              }

            } else {
              Swal.fire('Operación Cancelada', 'No se han realizado cambios.', 'error');
            }
          })
      }
  }

  modificarPedido(){
    if( this.cliente.length < 5 ||this.cliente == '' ||this.menus.length == 0 ||!this.fecha || this.fecha == 'Invalid Date')
      {
        return ;
      } else {
        Swal.fire({
          title: '¿Está seguro/a?',
          text: 'Se modificará el pedido seleccionado',
          icon: 'question',
          confirmButtonText: 'Aceptar',
          showCancelButton: true,
          cancelButtonText: 'Cancelar'
        })
        .then(async (r) => {
          if(r.isConfirmed) {

            let fechaString = moment(this.fecha).format('DD-MM-YYYY')

            console.log(fechaString)

            let agregarMenu$ = this.pedidosService.modificarPedido(this.idPedido, this.cliente, this.menus, fechaString);

            let res: any = await lastValueFrom(agregarMenu$);

            if(res.Ok == true) {
              Swal.fire({
                title: '¡Éxito!',
                text: 'Se ha modificado el pedido seleccionado',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                showCancelButton: false,
              })
              .then((r) => {
                if(r.isConfirmed) {
                  this.bsModalRef.hide();
                  this.ngOnInit();
                }
              })

            } else {
              Swal.fire('Error', 'No se ha modificado el pedido.', 'error');
            }

          } else {
            Swal.fire('Operación Cancelada', 'No se han realizado cambios.', 'error');
          }
        })
    }
  }

  eliminarPedido(id){
    Swal.fire({
      title: '¿Está seguro/a?',
      text: 'Se eliminará el pedido seleccionado',
      icon: 'question',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    })
    .then(async (resp) => {
      if(resp.isConfirmed) {
        let eliminarPedido$ = this.pedidosService.eliminarPedido(id);

        let res: any = await lastValueFrom(eliminarPedido$);

        if(res.Ok == true) {
          Swal.fire({
            title: '¡Éxito!',
            text: 'Se ha eliminado el pedido seleccionado.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showCancelButton: false,
          })
          .then((r) => {
            if(r.isConfirmed) {
              this.ngOnInit();
            }
          })
        } else {
          Swal.fire('Error', 'No se ha eliminado el pedido seleccionado.', 'error');
        }
      } else {
        Swal.fire('Operación Cancelada', 'No se han realizado cambios.', 'error');
      }
    })
  }
}
