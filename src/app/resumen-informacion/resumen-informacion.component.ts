import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resumen-informacion',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './resumen-informacion.component.html',
  styleUrl: './resumen-informacion.component.css'
})
export class ResumenInformacionComponent implements OnInit {

  cliente: any;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private location: Location, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const tipoDocumento = this.route.snapshot.paramMap.get('tipoDocumento');
    const numeroDocumento = this.route.snapshot.paramMap.get('numeroDocumento');
    if (tipoDocumento && numeroDocumento) {
      this.clienteService.getCliente(tipoDocumento, numeroDocumento).subscribe({
        next: data => {
          this.cliente = data;
        },
        error: error => {
          if(error.status === 404) {
            this.snackBar.open('Cliente no encontrado', 'Cerrar', {
              duration: 3000,
            });
            this.router.navigate(['/ingreso-informacion']);
          } else {
            console.error('Error obteniendo la información', error);
          }
        }
      });
    }
  }

  regresar() {
    this.location.back();
  }

}
