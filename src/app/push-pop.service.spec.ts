import { TestBed, inject } from '@angular/core/testing';

import { PushPopService } from './push-pop.service';

describe('PushPopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushPopService]
    });
  });

  it('should be created', inject([PushPopService], (service: PushPopService) => {
    expect(service).toBeTruthy();
  }));
});
