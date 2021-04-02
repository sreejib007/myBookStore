import { TestBed } from '@angular/core/testing';

import { MyGardGuard } from './my-gard.guard';

describe('MyGardGuard', () => {
  let guard: MyGardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyGardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
