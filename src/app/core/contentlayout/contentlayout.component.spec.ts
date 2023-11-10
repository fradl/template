import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentlayoutComponent } from './contentlayout.component';

describe('ContentlayoutComponent', () => {
  let component: ContentlayoutComponent;
  let fixture: ComponentFixture<ContentlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentlayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
