import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPesquisaComponent } from './listagem-pesquisa.component';

describe('ListagemPesquisaComponent', () => {
  let component: ListagemPesquisaComponent;
  let fixture: ComponentFixture<ListagemPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
