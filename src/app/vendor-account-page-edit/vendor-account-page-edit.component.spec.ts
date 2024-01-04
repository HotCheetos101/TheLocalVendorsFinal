import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAccountPageEditComponent } from './vendor-account-page-edit.component';

describe('VendorAccountPageEditComponent', () => {
  let component: VendorAccountPageEditComponent;
  let fixture: ComponentFixture<VendorAccountPageEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorAccountPageEditComponent]
    });
    fixture = TestBed.createComponent(VendorAccountPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
