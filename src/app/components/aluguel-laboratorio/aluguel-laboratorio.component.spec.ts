import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelLaboratorioComponent } from './aluguel-laboratorio.component';

describe('AluguelLaboratorioComponent', () => {
  let component: AluguelLaboratorioComponent;
  let fixture: ComponentFixture<AluguelLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluguelLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
