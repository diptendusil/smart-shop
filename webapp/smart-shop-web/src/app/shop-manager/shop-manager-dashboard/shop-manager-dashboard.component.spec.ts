import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopManagerDashboardComponent } from './shop-manager-dashboard.component';

describe('ShopManagerDashboardComponent', () => {
  let component: ShopManagerDashboardComponent;
  let fixture: ComponentFixture<ShopManagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopManagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
