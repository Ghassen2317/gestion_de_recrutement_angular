import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriselisteComponent } from './entrepriseliste.component';

describe('EntrepriselisteComponent', () => {
  let component: EntrepriselisteComponent;
  let fixture: ComponentFixture<EntrepriselisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrepriselisteComponent]
    });
    fixture = TestBed.createComponent(EntrepriselisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
