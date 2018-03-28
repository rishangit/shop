import { TestBed, inject } from '@angular/core/testing';

import { ShopInfoService } from './shop-info.service';

describe('ShopInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopInfoService]
    });
  });

  it('should be created', inject([ShopInfoService], (service: ShopInfoService) => {
    expect(service).toBeTruthy();
  }));
});
