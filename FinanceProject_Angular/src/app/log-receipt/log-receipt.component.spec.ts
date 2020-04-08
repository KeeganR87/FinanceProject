import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogReceiptComponent } from './log-receipt.component';

describe('LogReceiptComponent', () => {
  let component: LogReceiptComponent;
  let fixture: ComponentFixture<LogReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
