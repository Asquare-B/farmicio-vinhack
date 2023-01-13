import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuktComponent } from './resukt.component';

describe('ResuktComponent', () => {
  let component: ResuktComponent;
  let fixture: ComponentFixture<ResuktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResuktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
