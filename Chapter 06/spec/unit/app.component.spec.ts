
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../../app/app.component';

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    comp.add('a sample comment');
    comp.like(comp.comments[0]);
  });

  it('should create component', () => {
    expect(comp).toBeDefined();
  });

  it('First item in the item should match', () => {
    expect(comp.comments[0].title).toBe('a sample comment');
  });

  it('Number of likes should increase on like', () => {
    expect(comp.comments[0].likes).toEqual(1);
  });

});
