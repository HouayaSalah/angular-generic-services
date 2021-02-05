import { TestBed } from '@angular/core/testing';

import { AbstractDaoService } from './abstract-dao.service';

describe('AbstractDaoServiceService', () => {
  let service: AbstractDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
