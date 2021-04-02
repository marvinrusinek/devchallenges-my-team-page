import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyteampageComponent } from './myteampage.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MyteampageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyteampageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-team-page'`, () => {
    const fixture = TestBed.createComponent(MyteampageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-team-page');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyteampageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('my-team-page app is running!');
  });
});
