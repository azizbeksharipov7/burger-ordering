import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { MyTestComponent } from './my-test.component';
import { By } from '@angular/platform-browser';


describe('MyTestComponent', () => {
  let component: MyTestComponent;
  let fixture: ComponentFixture<MyTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTestComponent],
    });
    fixture = TestBed.createComponent(MyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load users on ngOnInit ', ()=>{
    expect(component.users.length).toBeGreaterThan(0)
  });
  
  it('should add user ', ()=>{
    let initialUsers= [...component.users];
    let user={name:"Test", age:19}

    component.addUser(user)
    initialUsers.push(user)
    // console.log(fixture.debugElement.nativeElement);

    expect(component.users).toEqual(initialUsers)
    expect(component.users.length).toBe(initialUsers.length)
  });
  it('should print username ', ()=>{
    expect(fixture.debugElement.query(By.css("h1")).nativeElement.textContent
).toBe(component.username);
  });
  it('should print TEST2 after  2 secs', fakeAsync( ()=>{
    component.ngOnInit()
    setTimeout(()=>{
      fixture.detectChanges()
      const expectation = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;
      expect(expectation).toBe('TEST2')
    }, 2000)
    tick(2000)
  }))
  it('it should test smth', fakeAsync(()=>{
   const promise= new Promise((resolve, rejects)=>{
    setTimeout(()=>{
      console.log('DONE');
      resolve('finished')
    }, 1000)
   })
   promise.then((data)=>{
    expect(data).toBe('finished')
   })
    flushMicrotasks();
    tick(1000)
  }))
  it('should just spy function', ()=>{
    const spy =spyOn(component, 'sum').and.returnValue(10)
    // const spy2 = spyOn(component, 'addUser').and.callThrough()
    let result=component.sum(2,32)
    expect(result).toBe(34)
  })


});
