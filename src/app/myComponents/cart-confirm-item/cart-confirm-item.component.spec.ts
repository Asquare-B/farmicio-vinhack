import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartConfirmItemComponent } from './cart-confirm-item.component';

describe('CartConfirmItemComponent', () => {
  let component: CartConfirmItemComponent;
  let fixture: ComponentFixture<CartConfirmItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartConfirmItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartConfirmItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
