import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideHttpClient()]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.inject(DataService);
    expect(service).toBeTruthy();
  });
});
