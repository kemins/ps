import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from './../';
import { ValidatorModule } from '../../validators';
import { CreateAlbumComponent } from './create-album.component';
import { AlbumService } from './album.service';
import { AlbumDataService } from './album-data.service';
import { NewAlbumEffectService } from './new-album-effect.service';


@NgModule({
  declarations: [
    AlbumsComponent,
    CreateAlbumComponent
  ],
  entryComponents: [CreateAlbumComponent],
  imports: [
    RouterModule,
    CoreModule,
    AlertModule.forRoot(),
    HttpModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ValidatorModule
  ],
  exports: [
    AlbumsComponent,
    CreateAlbumComponent
  ],
  providers: [
    AlbumService,
    AlbumDataService,
    NewAlbumEffectService,
  ]
})
export class AlbumsModule {
  constructor() {
  }
}
