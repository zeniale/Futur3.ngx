import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  constructor(
    private route: ActivatedRoute,
    private albumViewerService: AlbumViewerService
  ) { }

  ngOnInit() {
    this.route.params
      .take(1)
      .subscribe((params: Params) => {
        this.photos = this.albumViewerService.readAlbumsData(+params[Routings.albumId]);
      });
  }

}