import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartConfirmDetailsComponent } from './cart-confirm-details.component';

describe('CartConfirmDetailsComponent', () => {
  let component: CartConfirmDetailsComponent;
  let fixture: ComponentFixture<CartConfirmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartConfirmDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartConfirmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
