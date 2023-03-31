import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlderReleasesComponent } from './older-releases.component';

describe('OlderReleasesComponent', () => {
  let component: OlderReleasesComponent;
  let fixture: ComponentFixture<OlderReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlderReleasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlderReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
