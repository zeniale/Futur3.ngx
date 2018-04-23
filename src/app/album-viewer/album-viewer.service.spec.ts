import { TestBed, inject } from '@angular/core/testing';

import { AlbumViewerService } from './album-viewer.service';

describe('AlbumViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumViewerService]
    });
  });

  it('should be created', inject([AlbumViewerService], (service: AlbumViewerService) => {
    expect(service).toBeTruthy();
  }));
});
