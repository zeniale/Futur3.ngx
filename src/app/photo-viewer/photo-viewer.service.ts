import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { PhotoDto } from '../shared/models';
import { ApiUrls } from '../shared/api-urls';

@Injectable()
export class PhotoViewerService {

    constructor(private httpClient: HttpClient) { }

    public readPhotoData(photoId: number): Observable<PhotoDto> {
        return this.httpClient.get<PhotoDto>(`${ApiUrls.photoUrl}${photoId}`);
    }

    public increaseLikes(photoId: number): Observable<boolean> {
        return this.httpClient.patch<boolean>(`${ApiUrls.increaseLikesUrl}${photoId}`, {});
    }

}
