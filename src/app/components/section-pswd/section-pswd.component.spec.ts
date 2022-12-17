import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPswdComponent } from './section-pswd.component';

describe('SectionPswdComponent', () => {
  let component: SectionPswdComponent;
  let fixture: ComponentFixture<SectionPswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPswdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
