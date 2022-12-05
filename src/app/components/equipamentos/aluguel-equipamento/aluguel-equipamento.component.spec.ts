import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelEquipamentoComponent } from './aluguel-equipamento.component';

describe('AluguelEquipamentoComponent', () => {
  let component: AluguelEquipamentoComponent;
  let fixture: ComponentFixture<AluguelEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluguelEquipamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
