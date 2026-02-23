import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor, ProveedorModel } from '../../services/proveedor';

@Component({
  selector: 'app-proveedores',
  imports: [],
  templateUrl: './proveedores.html',
  styleUrl: './proveedores.css',
})
export class Proveedores implements OnInit {
  proveedores: ProveedorModel[] = [];
  loading = true;
  errorMsg = '';

  constructor(
    private proveedorService: Proveedor,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores(): void {
    this.loading = true;
    this.proveedorService.getAll().subscribe({
      next: (data) => {
        this.proveedores = data;
        this.loading = false;
        this.cdr.detectChanges(); // ← fuerza la actualización de la vista
      },
      error: () => {
        this.errorMsg = 'Error al cargar proveedores.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  nuevo(): void {
    this.router.navigate(['/proveedores/nuevo']);
  }

  editar(id: number): void {
    this.router.navigate(['/proveedores/editar', id]);
  }

  eliminar(id: number): void {
    if (!confirm('¿Deseas eliminar este proveedor?')) return;
    this.proveedorService.delete(id).subscribe({
      next: () => this.cargarProveedores(),
      error: () => {
        this.errorMsg = 'Error al eliminar el proveedor.';
        this.cdr.detectChanges();
      }
    });
  }
}