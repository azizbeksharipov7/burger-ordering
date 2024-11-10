import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { MyTestComponent } from './my-test/my-test.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let myService:MyserviceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MyTestComponent],
      providers:[MyserviceService, provideHttpClient()] 
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    myService=TestBed.inject(MyserviceService) 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("shoul call getSmth when getUsers called", ()=>{
    const spy=spyOn(myService, "getSmth").and.returnValue(of({data:'MyData'}))
    component.getUsers();
    expect(spy).toHaveBeenCalled()
  })
});
