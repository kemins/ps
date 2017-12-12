import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
import { CoreModule } from './../../core';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from './../';
import { ValidatorModule } from '../../validators';
import { CreateAlbumComponent } from './CreateAlbumComponent';
import { AlbumService } from './AlbumService';
import { AlbumDataService } from './AlbumDataService';
import { NewAlbumEffectService } from './NewAlbumEffectService';
import { AlbumsResolver } from './AlbumsResolver';
import {
  MatButtonModule, MatCardModule, MatDialog, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';


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
    FormsModule,
    ReactiveFormsModule,
    ValidatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    AlbumsComponent,
    CreateAlbumComponent
  ],
  providers: [
    AlbumService,
    AlbumDataService,
    NewAlbumEffectService,
    AlbumsResolver
  ]
})
export class AlbumsModule {
  constructor() {
  }
}
