import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AppComponent', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('Should define a list object', () => {
    expect(comp.items).toBeDefined();
  });

  it('Should have 3 items in list', () => {
    expect(comp.items.length).toBe(3);
  });

  it('List items should be as expected', () => {
    expect(comp.items).toEqual(['test','execute','refactor']);
  });

  describe('Testing add method', () => {

      beforeEach(() => {
          comp.add('new-item');
      });

      it('Should have 4 items in list', () => {
          expect(comp.items.length).toBe(4);
      });

      it('Should add a new item at the end of list', () => {
          var lastIndexOfList = comp.items.length - 1;
    			expect(comp.items[lastIndexOfList]).toEqual('new-item');
      });
  });

});
