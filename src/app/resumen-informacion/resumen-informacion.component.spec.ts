import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenInformacionComponent } from './resumen-informacion.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ResumenInformacionComponent', () => {
  let component: ResumenInformacionComponent;
  let fixture: ComponentFixture<ResumenInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatSnackBarModule, ResumenInformacionComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  if (key === 'tipoDocumento') return 'C';
                  if (key === 'numeroDocumento') return '12345678';
                  return null;
                }
              }
            }
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
