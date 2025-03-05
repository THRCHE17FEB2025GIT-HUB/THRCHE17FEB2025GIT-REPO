// import { TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AppComponent],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have the 'lp1b-EFicitiShopAngularSPA-NG18' title`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('lp1b-EFicitiShopAngularSPA-NG18');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Hello, lp1b-EFicitiShopAngularSPA-NG18');
//   });
// });


// Import the TestBed - primary API for writing unit tests for Angular applications.
import { TestBed } from '@angular/core/testing';
// Import the AppComponent - the root component of the application.
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
// The ComponentFixture is a handle to the component and provides access to the component instance itself and to the DebugElement, which is a handle to the component’s DOM element.
import { ComponentFixture } from '@angular/core/testing';

// The describe() function is a global Jasmine function that is used for grouping tests together.
describe('AppComponent', () => {
  // The beforeEach() function is a global Jasmine function that is called before each test spec.
  beforeEach(async () => {
    // The async function is used to test components that have external templates and stylesheets.
    // The await keyword is used to wait for the component to be compiled before continuing with the test.
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      // The compileComponents() function is used to compile the components.
    }).compileComponents();
  });
  // it() is a global Jasmine function that is used for writing test specs.
  it('should create the app', () => {
    // The TestBed.createComponent() function is used to create an instance of the component.
    // Fixture is a wrapper for the component and provides access to the component instance itself and to the DebugElement, which is a handle to the component’s DOM element.
    const fixture = TestBed.createComponent(AppComponent);
    // The componentInstance property of the fixture is used to access the component instance.
    const app = fixture.componentInstance;
    // The expect() function is used to make an assertion about the test.
    expect(app).toBeTruthy();
    expect(app.title).toBe('lp1b-EFicitiShopAngularSPA-NG18');
  }
  );
    it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, lp1b-EFicitiShopAngularSPA-NG18');
  });
});

