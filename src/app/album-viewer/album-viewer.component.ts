import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

import { Photo } from '../shared/models';
import { Routings } from '../shared/routings';
import { AlbumViewerService } from './album-viewer.service';

@Component({
  selector: 'app-album-viewer',
  templateUrl: './album-viewer.component.html',
  styleUrls: ['./album-viewer.component.scss']
})
export class AlbumViewerComponent implements OnInit {

  public photos: Observable<Array<Photo>>;
  public homeLink = `/${Routings.albums}`;
  public albumId: number;
  constructor(
    private route: ActivatedRoute,
    private albumViewerService: AlbumViewerService
  ) { }

  ngOnInit() {
    this.route.params
      .take(1)
      .subscribe((params: Params) => {
        this.albumId = +params[Routings.albumId];
        this.photos = this.albumViewerService.readPhotosData(this.albumId)
          .map((photos: Array<Photo>) => {
            photos.forEach((photo: Photo) => photo.link = `/${Routings.photo}/${photo.id}`);
            return photos;
          });
      });
  }

}
