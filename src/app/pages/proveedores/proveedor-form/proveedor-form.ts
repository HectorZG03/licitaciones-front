import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor, ProveedorModel } from '../../../services/proveedor';

@Component({
  selector: 'app-proveedor-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './proveedor-form.html',
  styleUrl: './proveedor-form.css',
})
export class ProveedorForm implements OnInit {

  isEdit = false;
  loading = false;
  errorMsg = '';
  successMsg = '';

  proveedor: ProveedorModel = {
    nombrePersonaFisica: '',
    rfc: '',
    razonSocial: '',
    telefonos: '',
    correo: '',
    repLegalNombre: '',
    repLegalCargo: '',
    repLegalRfc: '',
    repLegalDomicilio: '',
    domCalleNumero: '',
    domColonia: '',
    domMunicipio: '',
    domCp: '',
    domEstado: '',
    padronNumCedula: '',
    padronVigencia: '',
    padronRubros: '',
    actaNumero: '',
    actaFecha: '',
    actaNotarioNombre: '',
    actaNotariaNumero: '',
    reformasNumero: '',
    reformasFecha: '',
    accionistas: ''
  };

  constructor(
    private proveedorService: Proveedor,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.proveedorService.getById(Number(id)).subscribe({
        next: (data) => this.proveedor = data,
        error: () => this.errorMsg = 'No se pudo cargar el proveedor.'
      });
    }
  }

  onSubmit(): void {
    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';

    const request$ = this.isEdit
      ? this.proveedorService.update(this.proveedor.id!, this.proveedor)
      : this.proveedorService.create(this.proveedor);

    request$.subscribe({
      next: () => {
        this.loading = false;
        this.successMsg = this.isEdit
          ? 'Proveedor actualizado correctamente.'
          : 'Proveedor registrado correctamente.';
        setTimeout(() => this.router.navigate(['/proveedores']), 1500);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Ocurrió un error al guardar.';
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/proveedores']);
  }
}