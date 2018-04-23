import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Routings } from './shared/routings';

const appRoutes: Routes = [
    {
        path: Routings.albums,
        loadChildren: 'app/album-list/album-list.module#AlbumListModule'
    },
    {
        path: '',
        redirectTo: Routings.albums,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
