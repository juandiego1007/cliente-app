import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-informacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingreso-informacion.component.html',
  styleUrl: './ingreso-informacion.component.css'
})
export class IngresoInformacionComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  botonDesactivado: boolean = true;

  constructor(private router: Router) { }

  onInputChange(event?: any): void {
    if (event) {
      const input = event.target as HTMLInputElement;
      const value = input.value.replace(/[^0-9]/g, '');
      this.numeroDocumento = this.formatearNumero(value);
      input.value = this.numeroDocumento;
    }

    const numeroFinal = this.numeroDocumento.replace(/,/g, '');
    this.botonDesactivado = !(this.tipoDocumento && numeroFinal.length >= 8 && numeroFinal.length <= 11);
  }

  formatearNumero(value: string): string {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  buscarCliente() {
    const numeroFinal = this.numeroDocumento.replace(/,/g, '');
    this.router.navigate(['/resumen-informacion', this.tipoDocumento, numeroFinal]);
  }

}
