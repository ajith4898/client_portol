import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcommentsComponent } from './ticketcomments.component';

describe('TicketcommentsComponent', () => {
  let component: TicketcommentsComponent;
  let fixture: ComponentFixture<TicketcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketcommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
