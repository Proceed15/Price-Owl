import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogorizedProuductsComponent } from './cateogorized-prouducts.component';

describe('CateogorizedProuductsComponent', () => {
  let component: CateogorizedProuductsComponent;
  let fixture: ComponentFixture<CateogorizedProuductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateogorizedProuductsComponent]
    });
    fixture = TestBed.createComponent(CateogorizedProuductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
