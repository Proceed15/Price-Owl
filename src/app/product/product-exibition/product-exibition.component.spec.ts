import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExibitionComponent } from './product-exibition.component';

describe('ProductExibitionComponent', () => {
  let component: ProductExibitionComponent;
  let fixture: ComponentFixture<ProductExibitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductExibitionComponent]
    });
    fixture = TestBed.createComponent(ProductExibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
