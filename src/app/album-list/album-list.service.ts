import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ApiUrls } from '../shared/api-urls';
import { AlbumPreviewDto } from '../shared/models';

@Injectable()
export class AlbumListService {

    constructor(private httpClient: HttpClient) { }

    public readAlbumsData(): Observable<Array<AlbumPreviewDto>> {
        return this.httpClient.get<Array<AlbumPreviewDto>>(ApiUrls.albumsUrl);
    }

}
