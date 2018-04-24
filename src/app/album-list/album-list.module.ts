import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlbumListService } from './album-list.service';
import { AlbumListComponent } from './album-list.component';
import { AlbumListRoutingModule } from './album-list-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    AlbumListRoutingModule
  ],
  providers: [
    AlbumListService
  ],
  declarations: [
    AlbumListComponent
  ]
})
export class AlbumListModule { }
