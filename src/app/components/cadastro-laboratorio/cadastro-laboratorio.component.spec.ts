import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLaboratorioComponent } from './cadastro-laboratorio.component';

describe('CadastroLaboratorioComponent', () => {
  let component: CadastroLaboratorioComponent;
  let fixture: ComponentFixture<CadastroLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
