import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ClienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a client by tipoDocumento and numeroDocumento', () => {
    const mockCliente = {
      primerNombre: 'Pepito',
      segundoNombre: 'Armando',
      primerApellido: 'Perez',
      segundoApellido: 'Maradona',
      telefono: '123456789',
      direccion: 'Calle 123',
      ciudadResidencia: { nombre: 'Springfield' }
    };

    const tipoDocumento = 'C';
    const numeroDocumento = '12345678';

    service.getCliente(tipoDocumento, numeroDocumento).subscribe(cliente => {
      expect(cliente).toEqual(mockCliente);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/cliente?tipoDocumento=${tipoDocumento}&numeroDocumento=${numeroDocumento}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCliente);
  });
});
