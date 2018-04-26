import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { PhotoViewerService } from './photo-viewer.service';
import { PhotoViewerComponent } from './photo-viewer.component';
import { PhotoViewerRoutingModule } from './photo-viewer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PhotoViewerRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    PhotoViewerComponent
  ],
  providers: [
    PhotoViewerService
  ]
})
export class PhotoViewerModule { }
