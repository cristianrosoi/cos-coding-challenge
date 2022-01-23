import { TestBed } from '@angular/core/testing';

import { SalesmanGuard } from './salesman.guard';

describe('SalesmanGuard', () => {
  let guard: SalesmanGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalesmanGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
