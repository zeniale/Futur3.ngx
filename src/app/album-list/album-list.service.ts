import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Album } from '../shared/models';
import { ApiUrls } from '../shared/api-urls';

@Injectable()
export class AlbumListService {

  constructor(private httpClient: HttpClient) { }

  public readAlbumsData(): Observable<Array<Album>> {
    return this.httpClient.get<Array<Album>>(ApiUrls.albumsUrl);
  }

}
