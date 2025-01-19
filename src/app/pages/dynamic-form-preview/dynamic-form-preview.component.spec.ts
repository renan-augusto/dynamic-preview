import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormPreviewComponent } from './dynamic-form-preview.component';

describe('DynamicFormPreviewComponent', () => {
  let component: DynamicFormPreviewComponent;
  let fixture: ComponentFixture<DynamicFormPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
