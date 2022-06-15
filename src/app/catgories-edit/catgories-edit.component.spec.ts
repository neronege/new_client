import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoriesEditComponent } from './catgories-edit.component';

describe('CatgoriesEditComponent', () => {
  let component: CatgoriesEditComponent;
  let fixture: ComponentFixture<CatgoriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgoriesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
