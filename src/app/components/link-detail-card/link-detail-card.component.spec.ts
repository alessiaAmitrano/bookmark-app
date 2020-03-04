import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDetailCardComponent } from './link-detail-card.component';

describe('LinkDetailCardComponent', () => {
  let component: LinkDetailCardComponent;
  let fixture: ComponentFixture<LinkDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
