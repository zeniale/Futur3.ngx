import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Photo } from '../shared/models';
import { ApiUrls } from '../shared/api-urls';

@Injectable()
export class PhotoViewerService {

  constructor(private httpClient: HttpClient) { }

  public readPhotoData(photoId: number): Observable<Photo> {
    return this.httpClient.get<Photo>(`${ApiUrls.photoUrl}${photoId}`);
  }

}
