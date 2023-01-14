import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRequesthomeItemComponent } from './farmer-requesthome-item.component';

describe('FarmerRequesthomeItemComponent', () => {
  let component: FarmerRequesthomeItemComponent;
  let fixture: ComponentFixture<FarmerRequesthomeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRequesthomeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRequesthomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
