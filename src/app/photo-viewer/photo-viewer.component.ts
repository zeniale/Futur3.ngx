import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

import { PhotoDto } from '../shared/models';
import { Routings } from '../shared/routings';
import { PhotoViewerService } from './photo-viewer.service';

@Component({
    selector: 'app-photo-viewer',
    templateUrl: './photo-viewer.component.html',
    styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {

    public photo: Observable<PhotoDto>;
    public photoId: number;
    public albumId: number;
    public likes: number;
    public albumLink: string;
    public homeLink = `/${Routings.albums}`;

    constructor(
        private route: ActivatedRoute,
        private photoViewerService: PhotoViewerService
    ) { }

    ngOnInit() {
        this.route.params
            .take(1)
            .subscribe((params: Params) => {
                this.photoId = +params[Routings.photoId];
                this.photo = this.photoViewerService.readPhotoData(this.photoId)
                    .do((photo: PhotoDto) => {
                        this.albumId = photo.albumId;
                        this.albumLink = `/${Routings.album}/${this.albumId}`;
                        this.likes = photo.likes;
                    });
            });
    }

    public increaseLikes(): void {
        this.photoViewerService.increaseLikes(this.photoId)
            .take(1)
            .subscribe((res: boolean) => {
                if (res) {
                    this.likes++;
                }
            });
    }

}
