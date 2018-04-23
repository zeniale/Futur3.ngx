import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

import { Photo } from '../shared/models';
import { Routings } from '../shared/routings';
import { PhotoViewerService } from './photo-viewer.service';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {

  public photo: Observable<Photo>;
  public photoId: number;
  public albumId: number;
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
          .do((photo: Photo) => {
            this.albumId = photo.albumId;
            this.albumLink = `/${Routings.album}/${this.albumId}`;
          });
      });
  }

}
