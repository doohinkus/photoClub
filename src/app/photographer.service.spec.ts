/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotographerService } from './photographer.service';

describe('PhotographerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotographerService]
    });
  });

  it('should ...', inject([PhotographerService], (service: PhotographerService) => {
    expect(service).toBeTruthy();
  }));
});
