import { TestBed } from '@angular/core/testing';

import { GioielleriaBuonaiutoService } from './gioielleria-buonaiuto.service';

describe('GioielleriaBuonaiutoService', () => {
  let service: GioielleriaBuonaiutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GioielleriaBuonaiutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
