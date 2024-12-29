import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComponent } from './add.edit.todo.component';

describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
