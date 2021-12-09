import { TestBed } from '@angular/core/testing';

import { FiltroPostService } from './filtro-post.service';

describe('FiltroPostService', () => {
  let service: FiltroPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
