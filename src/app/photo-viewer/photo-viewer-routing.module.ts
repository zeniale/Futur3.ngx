import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routings } from '../shared/routings';
import { PhotoViewerComponent } from './photo-viewer.component';

const photoViewerRoutingModule: Routes = [
    {
        path: `:${Routings.photoId}`,
        component: PhotoViewerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(photoViewerRoutingModule)],
    exports: [RouterModule]
})
export class PhotoViewerRoutingModule { }
