import { ChangeDetectorRef, Component, TemplateRef, ViewChild,  } from '@angular/core';
import { MenusService } from './menus.service';
import { lastValueFrom } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { esLocale } from 'ngx-bootstrap/locale';

registerLocaleData(es);
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { PedidosService } from '../pedidos/pedidos.service';

defineLocale('es', esLocale);

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss'
})
export class MenusComponent {
  lstMenus: any[] = [];
  lstPedidos: any[] = [];
  @ViewChild('templateVistaMenu', { static: false })
  templateVistaMenu: TemplateRef<any>
  bsModalRef: BsModalRef
  minDate = new Date()
  menuForm: FormGroup
  isNewMenu: boolean = undefined;
  idMenu: number;
  cargando: boolean = undefined;

  constructor(
    private cdr: ChangeDetectorRef,
    private menusService: MenusService,
    private pedidosService: PedidosService,
    private modalService: BsModalService,
    private fb: FormBuilder,

  ){

    this.menuForm = this.fb.group({
      entrada: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      platoFondo: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      postre: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      fecha: new FormControl(null, [Validators.required])
    })

    this.menuForm.valueChanges.subscribe(val => {
      console.log(val);
    })
  }

  ngOnInit() {
    this.listarMenus();
    // console.log(this.compararFechas('04-10-2024'));
  }

  get f(): { [key: string]: AbstractControl } {
    return this.menuForm.controls;
  }

  async listarMenus(){
    this.cargando = true;
    let menus$ = this.menusService.listarMenus();
    let pedidos$ = this.pedidosService.listarPedidos();

    let [menusRes, pedidosRes]: [any, any] = await Promise.all([lastValueFrom(menus$), lastValueFrom(pedidos$)]);

    if (menusRes.Ok == true && pedidosRes.Ok == true) {
      this.lstMenus = menusRes.data;

      let menusEnPedidos = new Set(
        pedidosRes.data.flatMap(pedido => pedido.menus.map(menu => menu.id))
      );

      this.lstMenus.forEach(menu => {
        menu.existsInOrders = menusEnPedidos.has(menu.id);

        menu.allowed = this.compararFechas(menu.fecha)

      });

      console.log(this.lstMenus)
    }

    this.cargando = false;
    this.cdr.detectChanges();

  }

  compararFechas(dateString: string){

    let fechaHoy = moment(new Date()).format('DD-MM-YYYY')

    let dateStr = Date.parse(dateString);
    const currentDate = Date.parse(fechaHoy);

    console.log(dateStr, currentDate)

    if (dateStr < currentDate)
      return false
    else
      return true

  }

  async abrirModalMenu(menu: any, isNewMenu: boolean){

    this.isNewMenu = isNewMenu;

    // * Si isNewMenu true, es porque es un nuevo menu. De lo contrario, asignamos los valores del menu al formulario.
    if(isNewMenu == true) {
      this.menuForm.reset();
      this.idMenu = undefined;
      this.menuForm.controls['fecha'].enable();
    } else {

      this.idMenu = menu.id;

      var dateMomentObject = moment(menu.fecha, "DD/MM/YYYY");
      var dateObject = dateMomentObject.toDate();

      this.menuForm.patchValue({
        entrada: menu.entrada,
        platoFondo: menu.plato_fondo,
        postre: menu.postre,
        fecha: dateObject
      })

      this.menuForm.controls['fecha'].disable(); // ! Deshabilitamos la fecha en el modificar.

    }

    this.bsModalRef = this.modalService.show(this.templateVistaMenu, {
      class: 'modal-lg',
      backdrop: true,
      ignoreBackdropClick: true,
      animated: true,
    })

    console.log(this.menuForm.valid)
    this.cdr.detectChanges();
  }

  guardarMenu(){
    if(this.isNewMenu)
      this.agregarMenu()
    else
      this.modificarMenu()
  }

  hideModal(){
    this.bsModalRef.hide();
    setTimeout(() => {
      this.menuForm.reset();
    }, 500)
  }

  agregarMenu(){
    if(!this.menuForm.valid) {
      this.menuForm.markAllAsTouched();
      return;
    }
    else
    {
      Swal.fire({
        title: '¿Está seguro/a?',
        text: 'Se creará un nuevo menú',
        icon: 'question',
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      })
      .then(async (resp) => {
        if(resp.isConfirmed) {
          let form = this.menuForm.value

          let fechaString = moment(form.fecha).format('DD-MM-YYYY')

          console.log(fechaString)

          let agregarMenu$ = this.menusService.agregarMenu(form.entrada, form.platoFondo, form.postre, fechaString);

          let res: any = await lastValueFrom(agregarMenu$);

          if(res.Ok == true) {
            Swal.fire({
              title: '¡Éxito!',
              text: 'Se ha creado un nuevo menú',
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

  modificarMenu(){
    if(!this.menuForm.valid) {
      this.menuForm.markAllAsTouched();
      return;
    }
    else
    {
      Swal.fire({
        title: '¿Está seguro/a?',
        text: 'Se modificará el menú seleccionado',
        icon: 'question',
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      })
      .then(async (resp) => {
        if(resp.isConfirmed) {
          let form = this.menuForm.value

          let fechaString = moment(form.fecha).format('DD-MM-YYYY')

          console.log(fechaString)

          let agregarMenu$ = this.menusService.modificarMenu(this.idMenu, form.entrada, form.platoFondo, form.postre, fechaString);

          let res: any = await lastValueFrom(agregarMenu$);

          if(res.Ok == true) {
            Swal.fire({
              title: '¡Éxito!',
              text: 'Se ha modificado el menú seleccionado',
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
          }

        } else {
          Swal.fire('Operación Cancelada', 'No se han realizado cambios.', 'error');
        }
      })
    }
  }

  eliminarMenu(id: number){
    Swal.fire({
      title: '¿Está seguro/a?',
      text: 'Se eliminará el menu seleccionado',
      icon: 'question',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    })
    .then(async (resp) => {
      if(resp.isConfirmed) {
        let eliminarMenu$ = this.menusService.eliminarMenu(id);

        let res: any = await lastValueFrom(eliminarMenu$);

        if(res.Ok == true) {
          Swal.fire({
            title: '¡Éxito!',
            text: 'Se ha eliminado el menú seleccionado.',
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
          Swal.fire('Error', 'No se ha eliminado el menú seleccionado.', 'error');
        }
      } else {
        Swal.fire('Operación Cancelada', 'No se han realizado cambios.', 'error');
      }
    })
  }

}
