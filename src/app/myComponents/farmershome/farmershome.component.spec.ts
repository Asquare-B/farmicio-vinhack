import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmershomeComponent } from './farmershome.component';

describe('FarmershomeComponent', () => {
  let component: FarmershomeComponent;
  let fixture: ComponentFixture<FarmershomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmershomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmershomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
