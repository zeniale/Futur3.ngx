import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Photo } from '../shared/models';
import { ApiUrls } from '../shared/api-urls';

@Injectable()
export class AlbumViewerService {

  constructor(private httpClient: HttpClient) { }

  public readPhotosData(albumId: number): Observable<Array<Photo>> {
    return this.httpClient.get<Array<Photo>>(`${ApiUrls.photosUrl}${albumId}`);
  }

}
