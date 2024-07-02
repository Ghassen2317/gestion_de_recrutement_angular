import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCandidateComponent } from './espace-candidate.component';

describe('EspaceCandidateComponent', () => {
  let component: EspaceCandidateComponent;
  let fixture: ComponentFixture<EspaceCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceCandidateComponent]
    });
    fixture = TestBed.createComponent(EspaceCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
