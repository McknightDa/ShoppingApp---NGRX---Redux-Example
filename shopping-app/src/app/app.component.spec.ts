import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let store: MockStore;
  let initialState = {}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule
      ],
      // providers: [
      //   provideMockStore({initialState}),
      // ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach( () => {
     TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState}),
      ],
    });

    store = TestBed.inject(MockStore);
  });

  /*
  constructor(private store: Store){}
  ngOnInit(){
    this.store.dispatch(getShirts());
    this.store.dispatch(getFavs());
  }
  */

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'shopping-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shopping-app');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('shopping-app app is running!');
  });
});
