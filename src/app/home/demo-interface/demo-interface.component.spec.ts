import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInterfaceComponent } from './demo-interface.component';

describe('DemoInterfaceComponent', () => {
  let component: DemoInterfaceComponent;
  let fixture: ComponentFixture<DemoInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoInterfaceComponent]
    });
    fixture = TestBed.createComponent(DemoInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
