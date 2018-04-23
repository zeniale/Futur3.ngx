import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlbumViewerService } from './album-viewer.service';
import { AlbumViewerComponent } from './album-viewer.component';
import { AlbumViewerRoutingModule } from './album-viewer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AlbumViewerRoutingModule
  ],
  providers: [
    AlbumViewerService
  ],
  declarations: [
    AlbumViewerComponent
  ]
})
export class AlbumViewerModule { }
