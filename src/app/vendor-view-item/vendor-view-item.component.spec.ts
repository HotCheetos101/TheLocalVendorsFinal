import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorViewItemComponent } from './vendor-view-item.component';

describe('VendorViewItemComponent', () => {
  let component: VendorViewItemComponent;
  let fixture: ComponentFixture<VendorViewItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorViewItemComponent]
    });
    fixture = TestBed.createComponent(VendorViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
