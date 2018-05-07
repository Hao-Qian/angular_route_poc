import { TestBed, inject } from '@angular/core/testing';

import { UserrouteService } from './userroute.service';

describe('UserrouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserrouteService]
    });
  });

  it('should be created', inject([UserrouteService], (service: UserrouteService) => {
    expect(service).toBeTruthy();
  }));
});
