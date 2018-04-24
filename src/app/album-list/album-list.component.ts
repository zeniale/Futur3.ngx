import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Album } from '../shared/models';
import { AlbumListService } from './album-list.service';
import { Routings } from '../shared/routings';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  public albums: Observable<Array<Album>>;

  constructor(private albumListService: AlbumListService) { }

  ngOnInit() {
    this.albums = this.albumListService.readAlbumsData()
      .map((albums: Array<Album>) => {
        albums.forEach((album: Album) => album.link = `/${Routings.album}/${album.id}`);
        return albums;
      });
  }

}
