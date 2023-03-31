import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestReleaseComponent } from './newest-release.component';

describe('NewestReleaseComponent', () => {
  let component: NewestReleaseComponent;
  let fixture: ComponentFixture<NewestReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestReleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
