import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPaciComponent } from './info-paci.component';

describe('InfoPaciComponent', () => {
  let component: InfoPaciComponent;
  let fixture: ComponentFixture<InfoPaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
