import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AlbumPreviewDto } from '../shared/models';
import { AlbumListService } from './album-list.service';
import { Routings } from '../shared/routings';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

    public albums: Observable<Array<AlbumPreviewDto>>;

    constructor(private albumListService: AlbumListService) { }

    ngOnInit() {
        this.albums = this.albumListService.readAlbumsData()
            .map((albums: Array<AlbumPreviewDto>) => {
                albums.forEach((album: AlbumPreviewDto) => {
                    album.link = `/${Routings.album}/${album.albumId}`;
                    album.webSite = `http://${album.webSite}`;
                    album.mapLink = `http://www.google.com/maps/place/${album.lat},${album.lng}`
                });
                return albums;
            });
    }

}
