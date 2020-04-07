import { TestBed } from '@angular/core/testing';

import { Auth4Service } from './auth4.service';

describe('Auth4Service', () => {
  let service: Auth4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
