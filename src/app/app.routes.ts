import { Routes } from '@angular/router';
import { IngresoInformacionComponent } from './ingreso-informacion/ingreso-informacion.component';
import { ResumenInformacionComponent } from './resumen-informacion/resumen-informacion.component';

export const routes: Routes = [
    { path: '', redirectTo: '/ingreso-informacion', pathMatch: 'full' },
    { path: 'ingreso-informacion', component: IngresoInformacionComponent },
    { path: 'resumen-informacion/:tipoDocumento/:numeroDocumento', component: ResumenInformacionComponent }
];
