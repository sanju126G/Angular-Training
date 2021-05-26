import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDropComponent } from './search-drop.component';

describe('SearchDropComponent', () => {
  let component: SearchDropComponent;
  let fixture: ComponentFixture<SearchDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
