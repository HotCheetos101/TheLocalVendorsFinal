import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTransactionHistoryComponent } from './vendor-transaction-history.component';

describe('VendorTransactionHistoryComponent', () => {
  let component: VendorTransactionHistoryComponent;
  let fixture: ComponentFixture<VendorTransactionHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorTransactionHistoryComponent]
    });
    fixture = TestBed.createComponent(VendorTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
