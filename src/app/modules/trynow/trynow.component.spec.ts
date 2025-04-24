import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrynowComponent } from './trynow.component';

describe('TrynowComponent', () => {
  let component: TrynowComponent;
  let fixture: ComponentFixture<TrynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrynowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
