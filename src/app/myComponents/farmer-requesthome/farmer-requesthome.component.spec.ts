import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRequesthomeComponent } from './farmer-requesthome.component';

describe('FarmerRequesthomeComponent', () => {
  let component: FarmerRequesthomeComponent;
  let fixture: ComponentFixture<FarmerRequesthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRequesthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRequesthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
