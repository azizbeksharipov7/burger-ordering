import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { MyserviceService } from './myservice.service';
import { provideHttpClient } from '@angular/common/http';

describe('MyserviceService', () => {
  let service: MyserviceService;
  let httpTestingController:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[provideHttpClientTesting()],
      providers:[MyserviceService, provideHttpClient()] 
    });
    service = TestBed.inject(MyserviceService);
    httpTestingController=TestBed.inject(HttpTestingController)
  });

  it('should get users', () => {
    service.getSmth().subscribe(data=>{
      expect(data).toEqual({username:"Test name"})
    })
   const httpReq= httpTestingController.expectOne('https://reqres.in/api/users?page=2')
   httpReq.flush({username:"Test name"})
   httpTestingController.verify()
  });
});
