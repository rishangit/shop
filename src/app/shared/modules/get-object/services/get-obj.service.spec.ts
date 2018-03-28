import { TestBed, inject } from '@angular/core/testing';

import { GetObjService } from './get-obj.service';

describe('GetObjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetObjService]
    });
  });

  it('should be created', inject([GetObjService], (service: GetObjService) => {
    expect(service).toBeTruthy();
  }));
});
