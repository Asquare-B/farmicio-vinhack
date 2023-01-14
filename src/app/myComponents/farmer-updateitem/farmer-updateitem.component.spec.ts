import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerUpdateitemComponent } from './farmer-updateitem.component';

describe('FarmerUpdateitemComponent', () => {
  let component: FarmerUpdateitemComponent;
  let fixture: ComponentFixture<FarmerUpdateitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerUpdateitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerUpdateitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
