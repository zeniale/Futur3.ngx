import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumListComponent } from './album-list.component';

const albumListRoutingModule: Routes = [
    {
        path: '',
        component: AlbumListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(albumListRoutingModule)],
    exports: [RouterModule]
})
export class AlbumListRoutingModule { }
