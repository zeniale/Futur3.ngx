import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routings } from '../shared/routings';
import { AlbumViewerComponent } from './album-viewer.component';

const albumViewerRoutingModule: Routes = [
    {
        path: `:${Routings.albumId}`,
        component: AlbumViewerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(albumViewerRoutingModule)],
    exports: [RouterModule]
})
export class AlbumViewerRoutingModule { }
