import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlatilloComponent } from './detail-platillo.component';

describe('DetailPlatilloComponent', () => {
  let component: DetailPlatilloComponent;
  let fixture: ComponentFixture<DetailPlatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPlatilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
