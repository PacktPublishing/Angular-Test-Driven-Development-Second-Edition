
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from '../../app/app.component';
import { NavbarComponent } from '../../app/nav/navbar.component';
import { RouterOutlet } from '@angular/router';
import { RouterOutletStubComponent, RouterLinkStubDirective } from './stub/router-stubs.js';

describe('AppComponent test suite', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let navDestination:any;
  let navLinks:any;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent, NavbarComponent,
                     RouterLinkStubDirective,
                     RouterOutletStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));

    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    navDestination = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    navLinks = navDestination
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

  });

  it('should create and initiate the App component', () => {
    expect(comp).toBeDefined();
  });

  it('should have expected test in <h1> element', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/My First Angular 2 App/i,
      '<h1> should say something about "Angular2 App"');
  });

  it('can get RouterLinks from template', () => {
    expect(navLinks.length).toBe(3, 'should have 3 links');
    expect(navLinks[0].linkParams).toBe('/view1', '1st link should go to View1');
    expect(navLinks[1].linkParams).toBe('/view2', '1st link should go to View2');
    expect(navLinks[2].linkParams).toBe('/members', '1st link should go to members search page');
  });

  it('can click nav items link in template and navigate accordingly', () => {
    navDestination[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(navLinks[0].navigatedTo).toBe('/view1');

    navDestination[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(navLinks[1].navigatedTo).toBe('/view2');

    navDestination[2].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(navLinks[2].navigatedTo).toBe('/members');
  });

});
