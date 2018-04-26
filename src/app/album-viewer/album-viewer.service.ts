import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ApiUrls } from '../shared/api-urls';
import { PhotoPreviewDto } from '../shared/models';

@Injectable()
export class AlbumViewerService {

  constructor(private httpClient: HttpClient) { }

  public readPhotosData(albumId: number): Observable<Array<PhotoPreviewDto>> {
    return this.httpClient.get<Array<PhotoPreviewDto>>(`${ApiUrls.photosUrl}${albumId}`);
  }

}
