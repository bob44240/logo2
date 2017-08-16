import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDrawComponent } from './logo-draw.component';

describe('LogoDrawComponent', () => {
  let component: LogoDrawComponent;
  let fixture: ComponentFixture<LogoDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
