import { TestBed } from '@angular/core/testing';

import { PostblogforboottablaService } from './postblogforboottabla.service';

describe('PostblogforboottablaService', () => {
  let service: PostblogforboottablaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostblogforboottablaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
