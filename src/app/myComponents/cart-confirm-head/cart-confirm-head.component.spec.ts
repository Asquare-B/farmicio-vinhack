import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartConfirmHeadComponent } from './cart-confirm-head.component';

describe('CartConfirmHeadComponent', () => {
  let component: CartConfirmHeadComponent;
  let fixture: ComponentFixture<CartConfirmHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartConfirmHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartConfirmHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
