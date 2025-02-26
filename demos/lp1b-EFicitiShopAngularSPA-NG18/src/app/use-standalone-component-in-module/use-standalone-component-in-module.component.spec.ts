import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseStandaloneComponentInModuleComponent } from './use-standalone-component-in-module.component';

describe('UseStandaloneComponentInModuleComponent', () => {
  let component: UseStandaloneComponentInModuleComponent;
  let fixture: ComponentFixture<UseStandaloneComponentInModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseStandaloneComponentInModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseStandaloneComponentInModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
